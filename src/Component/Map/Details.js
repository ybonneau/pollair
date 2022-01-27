import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import UserProfile from "../UserProfile/UserProfile";

export default function Details({ list, select }) {
  const [selectedIndex, setSelectedIndex] = React.useState();

  const handlerSelect = (id) => () => {
    setSelectedIndex(id);
    select(id);
    UserProfile.setSelect(id)
  };
  
  React.useEffect(() => {
    if(list.length) {
      setSelectedIndex(list[0].cleaned_section._id.$oid)
      UserProfile.setSelect(list[0].cleaned_section._id.$oid)
    }
  }, [list])
  

  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
        border: 1,
        borderColor: "#d9d9d9",
        maxHeight: "auto",
        overflow: "auto",
        padding: 0

      }}
    >
      {list !== 0 &&
        list.map((trajet) => {
          const date = trajet.cleaned_section.data.start_local_dt;
          const displayDate =
            date.day.toString().padStart(2, "0") +
            "/" +
            date.month.toString().padStart(2, "0") +
            "/" +
            date.year +
            " " +
            date.hour.toString().padStart(2, "0") +
            ":" +
            date.minute.toString().padStart(2, "0");
          return (
            <React.Fragment key={trajet.cleaned_section._id.$oid}>
              <ListItemButton
                selected={selectedIndex === trajet.cleaned_section._id.$oid}
                onClick={handlerSelect(trajet.cleaned_section._id.$oid)}
                sx={{
                  paddingTop: 2,
                  paddingBottom: 2  
                }}
              >
                <ListItemText
                  primary={displayDate}
                  secondary={
                    <>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                      </Typography>
                    </>
                  }
                />
              </ListItemButton>
              <Divider />
            </React.Fragment>
          );
        })}
    </List>
  );
}
