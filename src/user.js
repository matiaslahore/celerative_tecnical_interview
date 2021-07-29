import { Grid, ListItemText } from "@material-ui/core";

export const User = ({ user: { first_name, last_name, email, avatar } }) => {
  return (
    <Grid container>
      <Grid item xs={6}>
        <img src={avatar} alt="Logo" />
      </Grid>

      <Grid item xs={6} style={{ textAlign: "left" }}>
        <ListItemText> {first_name}</ListItemText>
        <ListItemText> {last_name}</ListItemText>
        <ListItemText> {email}</ListItemText>
      </Grid>
    </Grid>
  );
};
