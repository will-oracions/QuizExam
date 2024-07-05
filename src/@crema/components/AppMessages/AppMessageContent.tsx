import { Box, IconButton, Theme } from "@mui/material";
import MessageItem from "./MessageItem";
import List from "@mui/material/List";
import Button from "@mui/material/Button";
import AppScrollbar from "../AppScrollbar";
import IntlMessages from "@crema/helpers/IntlMessages";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import Typography from "@mui/material/Typography";
// import { SxProps } from "@mui/system";
import { messages } from "@crema/mockapi/fakedb";

type AppMessageContentProps = {
  onClose: () => void;
  sxStyle: any; // SxProps<Theme>;
};

const AppMessageContent: React.FC<AppMessageContentProps> = ({
  onClose,
  sxStyle,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: 280,
        height: "100%",
        ...sxStyle,
      }}>
      <Box
        sx={{
          padding: "5px 20px",
          display: "flex",
          alignItems: "center",
          borderBottom: 1,
          borderBottomColor: (theme) => theme.palette.divider,
          minHeight: { xs: 56, sm: 70 },
        }}>
        <Typography component="h3">
          <IntlMessages id="dashboard.messages" />({messages.length})
        </Typography>
        <IconButton
          sx={{
            height: 40,
            width: 40,
            ml: "auto",
            color: "text.secondary",
          }}
          onClick={onClose}
          size="large">
          <CancelOutlinedIcon />
        </IconButton>
      </Box>
      <AppScrollbar
        sx={{
          height: { xs: "calc(100% - 96px)", sm: "calc(100% - 110px)" },
        }}>
        <List
          sx={{
            py: 0,
          }}>
          {messages.map((item) => (
            <MessageItem key={item.id} item={item} />
          ))}
        </List>
      </AppScrollbar>
      <Button
        sx={{
          borderRadius: 0,
          width: "100%",
          textTransform: "capitalize",
          marginTop: "auto",
          height: 40,
        }}
        variant="contained"
        color="primary">
        <IntlMessages id="common.viewAll" />
      </Button>
    </Box>
  );
};

export default AppMessageContent;
