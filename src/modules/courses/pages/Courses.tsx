import { Box, Button, useMediaQuery } from "@mui/material";
import React from "react";
import { toast } from "react-toastify";

import { useTranslation } from "react-i18next";
import { useOutletContext } from "react-router-dom";
import useCustomModal from "../../../components/CustomModal/hooks/useCustomModal";
import { IOutletContext } from "../../../components/Layout";
import exportToPdf, { exportToExcel } from "../../../helpers/exporter";
import { toCalendarDate } from "../../../utils";
import CourseDatatable from "../components/CourseDatatable";
import CourseModals from "../components/CourseModals";
import CourseSidebar, { CourseFilter } from "../components/CourseSidebar";
import { toCourseExportable } from "../helpers/courseExporter";
import useCreateCourse from "../hooks/useCreateCourse";
import useDeleteCourse from "../hooks/useDeleteCourse";
import useUpdateCourse from "../hooks/useUpdateCourse";
import useCourses from "../hooks/useCourses";
import { Course, CourseFilterEnum } from "../models/Course";

const Courses = () => {
  const { closeSidebar } = useOutletContext<IOutletContext>();

  const isSmallScreen = useMediaQuery("(max-width:1400px)");

  const { t } = useTranslation();

  const [courses, setCourses] = React.useState<Course[]>([]);
  const [filteredCourses] = React.useState<Course[]>([]);
  const [editingCourse, setEditingCourse] = React.useState<Course | null>(null);
  const [deletingCourse, setDeletingCourse] = React.useState<Course | null>(
    null
  );

  const [courseFiltered] = React.useState<boolean>(false);
  const [courseFilter, setCourseFilter] = React.useState<CourseFilter>({
    main: CourseFilterEnum.ALL,
    level: "",
  });

  const [errorMessage, setErrorMessage] = React.useState<string>("");

  const notify = () =>
    toast(t("courses.courseCreated"), { type: "info", className: "app-toast" });

  const openCourseCreateEditModal = useCustomModal();
  const openCourseDeleteModal = useCustomModal();

  const createCourseMutation = useCreateCourse();
  const editCourseMutation = useUpdateCourse();
  const deleteCourseMutation = useDeleteCourse();
  const getCourseListQuery = useCourses();

  // console.log("Asss: ", getCourseListQuery.data);

  const courseFormRef = React.useRef<{ triggerSubmit: Function }>(null);

  React.useEffect(() => {
    getCourseListQuery.data && setCourses(getCourseListQuery.data);
  }, [getCourseListQuery.data]);

  React.useEffect(() => {
    handleCourseFilters();
  }, [courseFilter, courses]);

  const triggerSubmitForm = () => {
    courseFormRef.current?.triggerSubmit();
  };

  const onSubmitCourseForm = (data: Partial<Course>) => {
    // console.log("Data: ", data);

    const handler = editingCourse ? handleSaveUpdateCourse : handleSaveCourse;

    handler(data);
  };

  const handleSaveCourse = (data: Partial<Course>) => {
    const exist = courses.find(
      (a) => a.name?.toLowerCase() === data.name?.toLowerCase()
    );
    if (exist) {
      setErrorMessage(t("courses.nameAlreadyExist"));
      return;
    }

    setErrorMessage("");

    createCourseMutation.mutate(data, {
      onSuccess: (res) => {
        // console.log("Response: ", res);

        setCourses([res as Course, ...courses]);
        notify();
        openCourseCreateEditModal.closeModal();
      },
    });
  };

  const handleSaveUpdateCourse = (data: Partial<Course>) => {
    setErrorMessage("");

    editCourseMutation.mutate(data as Course, {
      onSuccess: (res) => {
        // console.log("Response: ", res);

        setCourses(courses.map((a) => (a.id === res.id ? res : a)));
        setEditingCourse(null);
        // notify();
        openCourseCreateEditModal.closeModal();
      },
    });
  };

  const handleDeleteCourse = () => {
    if (!deletingCourse) return;
    // console.log("Delete: ", deletingCourse);
    deleteCourseMutation.mutate(deletingCourse.id, {
      onSuccess: () => {
        // console.log("Res", res);
        setCourses((prev) => prev.filter((a) => a.id != deletingCourse.id));
        setDeletingCourse(null);
        openCourseDeleteModal.closeModal();
      },
    });
  };

  const handleCourseFilters = () => {
    // console.log(courseFilter);
    // let filteredSource = courses;
    // if (courseFilter.main === CourseFilterEnum.ALL) {
    //   filteredSource = courses;
    // } else {
    //   filteredSource = courses.filter((a) => {
    //     if (
    //       courseFilter.main === CourseFilterEnum.ALL_DONE &&
    //       a.todos &&
    //       a.todos.length > 0 &&
    //       a.todos.every((t) => t.completed === true)
    //     ) {
    //       return true;
    //     }
    //     if (
    //       courseFilter.main === CourseFilterEnum.NOTHING_DONE &&
    //       a.todos &&
    //       a.todos.length > 0 &&
    //       a.todos.every((t) => t.completed == false)
    //     ) {
    //       return true;
    //     }
    //     if (
    //       courseFilter.main === CourseFilterEnum.DONT_HAVE_TASK &&
    //       a.todos?.length === 0
    //     ) {
    //       return true;
    //     }
    //   });
    // }
    // if (courseFilter.gender !== "") {
    //   filteredSource = filteredSource.filter(
    //     (a) => a.gender === courseFilter.gender
    //   );
    // }
    // setCourseFiltered(true);
    // setFilteredCourses(filteredSource);
  };

  const handleExportToPDF = () => {
    const data: Course[] = courseFiltered ? filteredCourses : courses;
    exportToPdf<Partial<Course>>(
      toCourseExportable(data),
      `Courses-list-${toCalendarDate(new Date())}`
    );
  };

  const handleExportToExcel = () => {
    const data: Course[] = courseFiltered ? filteredCourses : courses;
    exportToExcel<Partial<Course>>(
      toCourseExportable(data),
      `Courses-list-${toCalendarDate(new Date())}`
    );
  };

  const openCreateCourseModal = () => {
    openCourseCreateEditModal.openModal();
    setErrorMessage("");
    setEditingCourse(null);
    closeSidebar();
  };

  const opentEditAssigeeModal = (row: Course) => {
    // console.log(row);
    setEditingCourse(row);
    setErrorMessage("");
    // closeSidebar();
    openCourseCreateEditModal.openModal();
  };

  const openDeleteCourseModal = (row: Course) => {
    // console.log(row);
    setDeletingCourse(row);
    openCourseDeleteModal.openModal();
  };

  return (
    <>
      <div id="app-sidebar" className="mobile">
        <CourseSidebar
          courseFilter={courseFilter}
          setCourseFilter={setCourseFilter}
          handleCreate={openCreateCourseModal}
        />
      </div>

      <main id="app-main">
        <Box>
          <h3 className="page-title">{t("courses.coursesPageTitle")}</h3>

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

          <CourseDatatable
            courses={courseFiltered ? filteredCourses : courses}
            handleEdit={opentEditAssigeeModal}
            handleDelete={openDeleteCourseModal}
          />
        </Box>
      </main>

      <CourseModals
        openCourseCreateEditModal={openCourseCreateEditModal}
        openCourseDeleteModal={openCourseDeleteModal}
        errorMessage={errorMessage}
        courseFormRef={courseFormRef}
        onSubmitCourseForm={onSubmitCourseForm}
        addEditModalIsLoading={
          createCourseMutation.isPending || editCourseMutation.isPending
        }
        isDeleting={deleteCourseMutation.isPending}
        triggerSubmitForm={triggerSubmitForm}
        editingCourse={editingCourse}
        triggerDelete={handleDeleteCourse}
      />
    </>
  );
};

export default Courses;
