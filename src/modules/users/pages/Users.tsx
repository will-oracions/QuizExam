import { Box, Button, useMediaQuery } from "@mui/material";
import React from "react";
import { toast } from "react-toastify";

import { useTranslation } from "react-i18next";
import { useOutletContext } from "react-router-dom";
import useCustomModal from "../../../components/CustomModal/hooks/useCustomModal";
import { IOutletContext } from "../../../components/Layout";
import exportToPdf, { exportToExcel } from "../../../helpers/exporter";
import { toCalendarDate } from "../../../utils";
import UserDatatable from "../components/UserDatatable";
import UserModals from "../components/UserModals";
import UserSidebar, { UserFilter } from "../components/UserSidebar";
import { toUserExportable } from "../helpers/userExporter";
import useCreateUser from "../hooks/useCreateUser";
import useDeleteUser from "../hooks/useDeleteUser";
import useUpdateUser from "../hooks/useUpdateUser";
import useUsers from "../hooks/useUsers";
import { User, UserFilterEnum } from "../models/User";

const Users = () => {
  const { closeSidebar } = useOutletContext<IOutletContext>();

  const isSmallScreen = useMediaQuery("(max-width:1400px)");

  const { t } = useTranslation();

  const [users, setUsers] = React.useState<User[]>([]);
  const [filteredUsers] = React.useState<User[]>([]);
  const [editingUser, setEditingUser] = React.useState<User | null>(null);
  const [deletingUser, setDeletingUser] = React.useState<User | null>(null);

  const [userFiltered] = React.useState<boolean>(false);
  const [userFilter, setUserFilter] = React.useState<UserFilter>({
    main: UserFilterEnum.ALL,
    gender: "",
  });

  const [errorMessage, setErrorMessage] = React.useState<string>("");

  const notify = () =>
    toast(t("userCreated"), { type: "info", className: "app-toast" });

  const openUserCreateEditModal = useCustomModal();
  const openUserDeleteModal = useCustomModal();

  const createUserMutation = useCreateUser();
  const editUserMutation = useUpdateUser();
  const deleteUserMutation = useDeleteUser();
  const getUserListQuery = useUsers();

  // console.log("Asss: ", getUserListQuery.data);

  const userFormRef = React.useRef<{ triggerSubmit: Function }>(null);

  React.useEffect(() => {
    getUserListQuery.data && setUsers(getUserListQuery.data);
  }, [getUserListQuery.data]);

  React.useEffect(() => {
    handleUserFilters();
  }, [userFilter, users]);

  const triggerSubmitForm = () => {
    userFormRef.current?.triggerSubmit();
  };

  const onSubmitUserForm = (data: Partial<User>) => {
    // console.log("Data: ", data);

    const handler = editingUser ? handleSaveUpdateUser : handleSaveUser;

    handler(data);
  };

  const handleSaveUser = (data: Partial<User>) => {
    const exist = users.find(
      (a) => a.name?.toLowerCase() === data.name?.toLowerCase()
    );
    if (exist) {
      setErrorMessage(t("users.nameAlreadyExist"));
      return;
    }

    setErrorMessage("");

    createUserMutation.mutate(data, {
      onSuccess: (res) => {
        // console.log("Response: ", res);

        setUsers([res as User, ...users]);
        notify();
        openUserCreateEditModal.closeModal();
      },
    });
  };

  const handleSaveUpdateUser = (data: Partial<User>) => {
    setErrorMessage("");

    editUserMutation.mutate(data as User, {
      onSuccess: (res) => {
        // console.log("Response: ", res);

        setUsers(users.map((a) => (a.id === res.id ? res : a)));
        setEditingUser(null);
        // notify();
        openUserCreateEditModal.closeModal();
      },
    });
  };

  const handleDeleteUser = () => {
    if (!deletingUser) return;
    // console.log("Delete: ", deletingUser);
    deleteUserMutation.mutate(deletingUser.id, {
      onSuccess: () => {
        // console.log("Res", res);
        setUsers((prev) => prev.filter((a) => a.id != deletingUser.id));
        setDeletingUser(null);
        openUserDeleteModal.closeModal();
      },
    });
  };

  const handleUserFilters = () => {
    // console.log(userFilter);
    // let filteredSource = users;
    // if (userFilter.main === UserFilterEnum.ALL) {
    //   filteredSource = users;
    // } else {
    //   filteredSource = users.filter((a) => {
    //     if (
    //       userFilter.main === UserFilterEnum.ALL_DONE &&
    //       a.todos &&
    //       a.todos.length > 0 &&
    //       a.todos.every((t) => t.completed === true)
    //     ) {
    //       return true;
    //     }
    //     if (
    //       userFilter.main === UserFilterEnum.NOTHING_DONE &&
    //       a.todos &&
    //       a.todos.length > 0 &&
    //       a.todos.every((t) => t.completed == false)
    //     ) {
    //       return true;
    //     }
    //     if (
    //       userFilter.main === UserFilterEnum.DONT_HAVE_TASK &&
    //       a.todos?.length === 0
    //     ) {
    //       return true;
    //     }
    //   });
    // }
    // if (userFilter.gender !== "") {
    //   filteredSource = filteredSource.filter(
    //     (a) => a.gender === userFilter.gender
    //   );
    // }
    // setUserFiltered(true);
    // setFilteredUsers(filteredSource);
  };

  const handleExportToPDF = () => {
    const data: User[] = userFiltered ? filteredUsers : users;
    exportToPdf<Partial<User>>(
      toUserExportable(data),
      `Users-list-${toCalendarDate(new Date())}`
    );
  };

  const handleExportToExcel = () => {
    const data: User[] = userFiltered ? filteredUsers : users;
    exportToExcel<Partial<User>>(
      toUserExportable(data),
      `Users-list-${toCalendarDate(new Date())}`
    );
  };

  const openCreateUserModal = () => {
    openUserCreateEditModal.openModal();
    setErrorMessage("");
    setEditingUser(null);
    closeSidebar();
  };

  const opentEditAssigeeModal = (row: User) => {
    // console.log(row);
    setEditingUser(row);
    setErrorMessage("");
    // closeSidebar();
    openUserCreateEditModal.openModal();
  };

  const openDeleteUserModal = (row: User) => {
    // console.log(row);
    setDeletingUser(row);
    openUserDeleteModal.openModal();
  };

  return (
    <>
      <div id="app-sidebar" className="mobile">
        <UserSidebar
          userFilter={userFilter}
          setUserFilter={setUserFilter}
          handleCreate={openCreateUserModal}
        />
      </div>

      <main id="app-main">
        <Box>
          <h3 className="page-title">{t("users.usersPageTitle")}</h3>

          <Box marginBottom={2} display="flex" justifyContent="flex-end">
            <Button
              size={isSmallScreen ? "small" : "medium"}
              onClick={handleExportToExcel}
              variant="contained"
              color="inherit"
              style={{ marginTop: "10px", marginRight: "1rem" }}>
              {t("exportExcelBtnLabel")}
            </Button>

            <Button
              size={isSmallScreen ? "small" : "medium"}
              onClick={handleExportToPDF}
              variant="contained"
              color="primary"
              style={{ marginTop: "10px" }}>
              {t("exportBtnLabel")}
            </Button>
          </Box>

          <UserDatatable
            users={userFiltered ? filteredUsers : users}
            handleEdit={opentEditAssigeeModal}
            handleDelete={openDeleteUserModal}
          />
        </Box>
      </main>

      <UserModals
        openUserCreateEditModal={openUserCreateEditModal}
        openUserDeleteModal={openUserDeleteModal}
        errorMessage={errorMessage}
        userFormRef={userFormRef}
        onSubmitUserForm={onSubmitUserForm}
        addEditModalIsLoading={
          createUserMutation.isPending || editUserMutation.isPending
        }
        isDeleting={deleteUserMutation.isPending}
        triggerSubmitForm={triggerSubmitForm}
        editingUser={editingUser}
        triggerDelete={handleDeleteUser}
      />
    </>
  );
};

export default Users;
