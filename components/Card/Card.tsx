import * as React from "react";
import MuiCard from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button } from "../Button/Button";
import Typography from "@mui/material/Typography";

type StyledCardProps = {
  imageId?: String | undefined;
  name: String;
  description: String;
};

export const Card: React.FC<StyledCardProps> = ({
  imageId,
  name,
  description,
}) => {
  // Not sure what this any warning is from, this is only temporary for sample images anyway
  const getImageId = (imageId) => {
    // This URL gets a random image from this site: https://picsum.photos/
    // Ive added a prop for an id that selects a specific image we can pass
    // only a temp solution to work on components
    if (imageId) {
      return `https://picsum.photos/id/${imageId}/400/300`;
    } else {
      return `https://picsum.photos/400/300`;
    }
  };
  return (
    <MuiCard sx={{ maxWidth: 300, minWidth: 300 }}>
      <CardMedia
        sx={{ minHeight: 350 }}
        component="img"
        height="140"
        src={getImageId(imageId)}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {(name = "Name")}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {(description = "Likes | interests | description")}
        </Typography>
      </CardContent>
      {/* Todo: extract to CardButtonSection */}
      <CardActions>
        <Button variant="contained" color="error" fullWidth>
          Dont Match
        </Button>
        <Button variant="contained" color="success" fullWidth>
          Match
        </Button>
      </CardActions>
    </MuiCard>
  );
};
