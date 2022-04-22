import { makeStyles } from "@material-ui/core/styles";
import CustomSlider from "./Utils/CustomSlider";
import {
  AccordionDetails,
  AccordionSummary,
  Accordion,
  Fab,
  Divider,
  Typography,
  CardMedia,
  CardContent,
  Card,
} from "@material-ui/core";
import {
  Twitter,
  WhatsApp,
  Facebook,
  FavoriteBorderSharp,
  ExpandMore,
} from "@material-ui/icons";

const useStyles = makeStyles(() => ({
  root: {
    width: 360,
    minHeight: 800,
  },
  content: {
    padding: 30,
  },
  brand: {
    fontWeight: "bold",
    marginBottom: 0,
  },
  media: {
    height: 430,
  },
  nameContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  name: {
    color: "#8E8E8E",
    fontWeight: "500",
  },
  favoriteButton: {
    padding: 0,
  },
  favoriteIconContainer: {
    position: "absolute",
    top: 505,
    right: 790,
  },
  favoriteIcon: {
    color: "#8E8E8E",
    width: 50,
    height: 50,
  },
  sellerContainer: {
    display: "flex",
    marginTop: 5,
  },
  sellerText: {
    color: "#8E8E8E",
    marginRight: 5,
  },
  sellerName: {
    fontWeight: "bold",
    color: "#75BDAF",
  },
  talleContainer: {
    marginTop: 15,
  },
  talleTitle: {
    color: "#8E8E8E",
    fontWeight: "bold",
  },
  talleBtnContainer: {
    display: "flex",
    marginTop: 5,
  },
  talleBtn: {
    color: "#ECECEC",
    margin: 10,
    width: 42,
    height: 42,
  },
  talleNumber: {
    color: "#8E8E8E",
    fontWeight: "bold",
  },
  socialMediaContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: 10,
  },
  socialMediaIcons: {
    color: "#8E8E8E",
    margin: 10,
    width: 30,
    height: 30,
  },
  heading: {
    color: "#8E8E8E",
    fontWeight: "bold",
  },
  details: {
    marginBottom: 5,
  },
  detailsText: {
    display: "block",
  },
}));

export default function ProductCard(props) {
  const classes = useStyles();
  const { productname, brand, sizes, description } = props.product;
  const point = "\n\u2022 ";

  const formatedDescriptionFuntion = () => {
    let descriptionFormated = description.substring(9);
    descriptionFormated = descriptionFormated.split(point);
    return descriptionFormated;
  };

  return (
    <div>
    <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image="/zapatillas.png"
          title="zapatillas"
        />
        <CardContent className={classes.content}>
          <div>
            <Typography className={classes.brand} variant="h6">
              {brand}
            </Typography>
          </div>
          <div className={classes.nameContainer}>
            <div>
              <div>
                <Typography
                  className={classes.name}
                  variant="body1"
                  component="p"
                >
                  {productname}
                </Typography>
              </div>
              <div className={classes.sellerContainer}>
                <Typography
                  className={classes.sellerText}
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  Vendido y entregado:
                </Typography>
                <Typography
                  className={classes.sellerName}
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  {brand}
                </Typography>
              </div>
            </div>
            <div className={classes.favoriteIconContainer}>
              <FavoriteBorderSharp className={classes.favoriteIcon} />
            </div>
          </div>
          <Divider />
          <div className={classes.talleContainer}>
            <div>
              <Typography className={classes.talleTitle} variant="h6">
                TALLE
              </Typography>
            </div>
            <div className={classes.talleBtnContainer}>
              {sizes.map((size) => (
                <div key={size.id}>
                  <Fab
                    className={classes.talleBtn}
                    elevation={0}
                    aria-label="talleBtn"
                  >
                    <Typography className={classes.talleNumber}>
                      {size.size}
                    </Typography>
                  </Fab>
                </div>
              ))}
            </div>
            <div>
              <CustomSlider />
            </div>
            <div className={classes.socialMediaContainer}>
              <div>
                <Facebook className={classes.socialMediaIcons} />
              </div>
              <div>
                <Twitter className={classes.socialMediaIcons} />
              </div>
              <div>
                <WhatsApp className={classes.socialMediaIcons} />
              </div>
            </div>
            <div>
              <div className={classes.details}>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel1"
                    id="panel1-header"
                  >
                    <Typography className={classes.heading}>
                      DESCRIPCIÓN
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails className={classes.detailsText}>
                    {formatedDescriptionFuntion().map((description, index) => (
                      <Typography key={index}>
                        {point}
                        {description}
                      </Typography>
                    ))}
                  </AccordionDetails>
                </Accordion>
              </div>
              <div className={classes.details}>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel2"
                    id="panel2-header"
                  >
                    <Typography className={classes.heading}>
                      DETALLE DEL PRODUCTO
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>
          </div>
        </CardContent>
    </Card>
    </div>
  );
}
