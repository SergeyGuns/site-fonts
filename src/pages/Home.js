import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import SearchIcon from "@mui/icons-material/Search";
import MuiBox from "@mui/material/Box";
import Paper from "@mui/material/Paper";
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

const Box = styled(MuiBox)`
  min-height: 66px;
  min-width: 150px;
  display: flex;
  align-items: flex-end;
`;

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  "& .MuiToggleButtonGroup-grouped": {
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
  const CATEGORIES_LIST = ["Sans", "Serif", "Slab"];

  const FISH_TEXT = {
    init: "aA",
    Cities: "Moscow",
    Excerts: "Тургенева не удовлетворяют ни отцы, ни дети.",
    Names: "Петр Иванович Поляков",
  };

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
      // "ui-sans-serif",
      // "ui-monospace",
      // "ui-rounded",
      // "emoji",
      // "math",
      // "fangsong",
    ];

    return arr;
  }

  const [overwriteState, setOverwriteState] = React.useState({});
  function overwriteFontProperty(fontName, properties) {
    setOverwriteState({
      ...overwriteState,
      [fontName]: { ...overwriteState[fontName], ...properties },
    });
  }
  function handleFontStyle(fontName, propertyName) {
    return function ({ target: { value } }) {
      overwriteFontProperty(fontName, { [propertyName]: value });
    };
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
  const [favoriteFontList, setFavoriteFont] = React.useState([]);
  function handleToggleFavaritFont(fontName) {
    const result = favoriteFontList.indexOf(fontName);
    if (result === -1) {
      setFavoriteFont([...favoriteFontList, fontName]);
    } else {
      let newFavoriteFontList = [...favoriteFontList];
      delete newFavoriteFontList[result];
      setFavoriteFont(newFavoriteFontList.filter((v) => v));
    }
  }

  function fontSerchNameCondition(searchValue) {
    return function (font) {
      if (searchValue === "") {
        return true;
      }
      return font.includes(searchValue);
    };
  }

  const [categories, setCategories] = React.useState([...CATEGORIES_LIST]);
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

  const [youText, setYouText] = React.useState(FISH_TEXT.init);
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
    <Grid container>
      <Grid container>
        <Grid sx={{ width: "100%" }}>
          <Grid
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
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
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <FormControl
                  variant="standard"
                  sx={{
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
                    multiple
                    onChange={handleCategoryChange}
                    label="Categories"
                  >
                    {CATEGORIES_LIST.map((cotegory) => (
                      <MenuItem key={cotegory} value={cotegory}>
                        {cotegory}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
              <Box>
                <FormControl
                  variant="standard"
                  sx={{
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
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <FormControl
                  variant="standard"
                  sx={{
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
          </Grid>
        </Grid>
      </Grid>

      <Grid xs={12} style={{ width: "100%", transform: "translate3d(0,0,0)" }}>
        {filter(fontList, [fontSerchNameCondition(search)]).map((fontName) => {
          return (
            <Grid key={fontName} xs={12} item>
              <Paper
                style={{
                  padding: "16px",
                  minHeight: "250px",
                  margin: "16px 0 16px 0",
                }}
                horizontal
              >
                <Grid item>
                  {fontName}

                  <span onClick={() => handleToggleFavaritFont(fontName)}>
                    {favoriteFontList.includes(fontName) ? (
                      <StarIcon />
                    ) : (
                      <StarBorderIcon />
                    )}
                  </span>
                </Grid>
                <Box sx={{ display: "flex", height: "56px" }}>
                  <FormControl
                    variant="standard"
                    sx={{
                      minWidth: 120,
                    }}
                  >
                    <InputLabel id="demo-simple-select-standard-label">
                      FontWeight
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      value={overwriteState[fontName]?.fontWeight}
                      onChange={handleFontStyle(fontName, "fontWeight")}
                      label="FontWeight"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={"100"}>100</MenuItem>
                      <MenuItem value={"200"}>200</MenuItem>
                      <MenuItem value={"300"}>300</MenuItem>
                      <MenuItem value={"400"}>400</MenuItem>
                      <MenuItem value={"500"}>500</MenuItem>
                      <MenuItem value={"600"}>600</MenuItem>
                      <MenuItem value={"700"}>700</MenuItem>
                      <MenuItem value={"800"}>800</MenuItem>
                      <MenuItem value={"900"}>900</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-end",
                    minWidth: 150,
                  }}
                >
                  <Grid item xs>
                    <Slider
                      value={
                        typeof overwriteState[fontName]?.fontSize === "number"
                          ? overwriteState[fontName]?.fontSize
                          : 16
                      }
                      onChange={handleFontStyle(fontName, "fontSize")}
                      aria-labelledby="input-slider"
                    />
                  </Grid>
                </Box>
                {/* <Canvas
                  draw={draw(
                    fontName,
                    youText,
                    overwriteState[fontName]?.fontSize || fontSize
                  )}
                ></Canvas> */}
                <Grid
                  key={fontName}
                  style={{
                    transition: "font-size 100ms",
                    transform: "translate3d(0, 0, 0);",
                    fontFamily: fontName,
                    fontSize: fontSize + "px",
                    willChange: "font-size",
                    textAlign: alignment,
                    ...(overwriteState[fontName]
                      ? overwriteState[fontName]
                      : {}),
                  }}
                  item
                >
                  {youText}
                </Grid>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
}

// function hiligthText(text) {
//   return (
//     <>
//       {text.split("").map((letter) => (
//         <span
//           style={{
//             background: "rgb(240,240,240)",
//             transition: "font-size 100ms",
//           }}
//         >
//           {letter}
//         </span>
//       ))}
//     </>
//   );
// }
