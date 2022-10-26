import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import ToggleButton from "@mui/material/ToggleButton";
import React from "react";
import Slider from "@mui/material/Slider";
import MuiInput from "@mui/material/Input";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import { styled } from "@mui/material/styles";

const Input = styled(MuiInput)`
  width: 42px;
  margin-left: 16px;
`;

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  "& .MuiToggleButtonGroup-grouped": {
    margin: theme.spacing(0.5),
    border: 0,
    "&.Mui-disabled": {
      border: 0,
    },
    "&:not(:first-of-type)": {
      borderRadius: theme.shape.borderRadius,
    },
    "&:first-of-type": {
      borderRadius: theme.shape.borderRadius,
    },
  },
}));

export default function Home() {
  const [fontList, setFontList] = React.useState([]);
  function listFonts() {
    const arr = [
      "serif",
      "sans-serif",
      "monospace",
      "cursive",
      "fantasy",
      "system-ui",
      "ui-serif",
      "ui-sans-serif",
      "ui-monospace",
      "ui-rounded",
      "emoji",
      "math",
      "fangsong",
    ];

    return arr;
  }

  React.useEffect(() => {
    setFontList(listFonts());
  }, []);

  const [search, setSearch] = React.useState("");
  function handleSearchChange({ target: { value } }) {
    console.log(value);
    setSearch(value);
  }

  function filter(arr, conditions) {
    return arr.filter((font) =>
      conditions.map((condition) => condition(font)).includes(true)
    );
  }

  function fontSerchNameCondition(searchValue) {
    return function (font) {
      if (searchValue === "") {
        return true;
      }
      return font.includes(searchValue);
    };
  }

  const [categories, setCategories] = React.useState("");
  const handleCategoryChange = ({ target: { value } }) => {
    setCategories(value);
  };

  const [properties, setProperties] = React.useState("");
  const handlePropertyChange = ({ target: { value } }) => {
    setProperties(value);
  };

  const [personality, setPersonality] = React.useState("");
  const handlePersonalityChange = ({ target: { value } }) => {
    setPersonality(value);
  };

  const [youText, setYouText] = React.useState(
    "Съеш этих мягких французких булочек"
  );
  const handleYouTextChange = ({ target: { value } }) => {
    setYouText(value);
  };

  const [alignment, setAlignment] = React.useState("");
  const handleAlignmentChange = (_, value) => {
    setAlignment(value);
  };

  const [fishText, setFishText] = React.useState("");
  const handleFishTextChange = (_, value) => {
    setFishText(value);
  };

  const [fontSize, setFontSize] = React.useState(16);
  const handleInputFontSizeChange = (event) => {
    setFontSize(event.target.value === "" ? "" : Number(event.target.value));
  };
  const handleSliderFontSizeChange = (_, value) => {
    setFontSize(value);
  };

  return (
    <Grid container spacing={2}>
      <Grid>
        <Grid>
          <Box sx={{ display: "flex", height: "56px" }}>
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <SearchIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
              <TextField
                value={search}
                onChange={handleSearchChange}
                id="input-with-sx"
                label="Search"
                variant="standard"
              />
            </Box>
            <Box>
              <FormControl
                variant="standard"
                sx={{
                  m: 1,
                  minWidth: 120,
                }}
              >
                <InputLabel id="demo-simple-select-standard-label">
                  Categories
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={categories}
                  onChange={handleCategoryChange}
                  label="Categories"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={"Sans"}>Sans</MenuItem>
                  <MenuItem value={"Serif"}>Serif</MenuItem>
                  <MenuItem value={"Slab"}>Slab</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box>
              <FormControl
                variant="standard"
                sx={{
                  m: 1,
                  minWidth: 120,
                }}
              >
                <InputLabel id="demo-simple-select-standard-label">
                  Propertyes
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={properties}
                  onChange={handlePropertyChange}
                  label="Propertyes"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={"Sans"}>Sans</MenuItem>
                  <MenuItem value={"Serif"}>Serif</MenuItem>
                  <MenuItem value={"Slab"}>Slab</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box
              sx={{ display: "flex", alignItems: "flex-end", minWidth: 150 }}
            >
              <Grid item xs>
                <Slider
                  value={typeof fontSize === "number" ? fontSize : 0}
                  onChange={handleSliderFontSizeChange}
                  aria-labelledby="input-slider"
                />
              </Grid>
              <Grid item>
                <Input
                  value={fontSize}
                  size="small"
                  onChange={handleInputFontSizeChange}
                  inputProps={{
                    step: 1,
                    min: 0,
                    max: 100,
                    type: "number",
                    "aria-labelledby": "input-slider",
                  }}
                />
              </Grid>
            </Box>
          </Box>
        </Grid>
        <Grid>
          <Grid>
            <Box sx={{ display: "flex", height: "56px" }}>
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <EditOutlinedIcon
                  sx={{ color: "action.active", mr: 1, my: 0.5 }}
                />
                <TextField
                  value={youText}
                  onChange={handleYouTextChange}
                  id="input-with-sx"
                  label="You Text"
                  variant="standard"
                />
              </Box>
              <Box>
                <FormControl
                  variant="standard"
                  sx={{
                    m: 1,
                    minWidth: 120,
                  }}
                >
                  <InputLabel id="demo-simple-select-standard-label">
                    Personality
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={personality}
                    onChange={handlePersonalityChange}
                    label="Categories"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={"personality 1"}>personality 1</MenuItem>
                    <MenuItem value={"personality 2"}>personality 2</MenuItem>
                    <MenuItem value={"personality 3"}>personality 3</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <StyledToggleButtonGroup
                  size="small"
                  value={fishText}
                  exclusive
                  onChange={handleFishTextChange}
                  aria-label="text alignment"
                >
                  <ToggleButton value="left" aria-label="left aligned">
                    Cities
                  </ToggleButton>
                  <ToggleButton value="center" aria-label="centered">
                    Excerts
                  </ToggleButton>
                  <ToggleButton value="right" aria-label="right aligned">
                    Names
                  </ToggleButton>
                </StyledToggleButtonGroup>
              </Box>
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <StyledToggleButtonGroup
                  size="small"
                  value={alignment}
                  exclusive
                  onChange={handleAlignmentChange}
                  aria-label="text alignment"
                >
                  <ToggleButton value="left" aria-label="left aligned">
                    <FormatAlignLeftIcon />
                  </ToggleButton>
                  <ToggleButton value="center" aria-label="centered">
                    <FormatAlignCenterIcon />
                  </ToggleButton>
                  <ToggleButton value="right" aria-label="right aligned">
                    <FormatAlignRightIcon />
                  </ToggleButton>
                </StyledToggleButtonGroup>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      {filter(fontList, [fontSerchNameCondition(search)]).map((value) => {
        return (
          <Grid key={value} item xs={12}>
            <Grid item>
              {Math.round(Math.random()) ? <StarBorderIcon /> : <StarIcon />}{" "}
              {value}
            </Grid>
            <Grid
              key={value}
              style={{
                fontFamily: value,
                fontSize: fontSize + "px",
                textAlign: alignment,
              }}
              item
            >
              {youText}
            </Grid>
          </Grid>
        );
      })}
    </Grid>
  );
}
