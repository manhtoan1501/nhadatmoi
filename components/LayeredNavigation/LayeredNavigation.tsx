// import React, { FunctionComponent, useEffect } from 'react';
// //Import Material Libs
// import Grid from "@material-ui/core/Grid";
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';
// import Collapse from '@material-ui/core/Collapse';
// import ExpandLess from '@material-ui/icons/ExpandLess';
// import ExpandMore from '@material-ui/icons/ExpandMore';
// import FormControl from '@material-ui/core/FormControl';
// import TextField from '@material-ui/core/TextField';
// import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
// import Typography from '@material-ui/core/Typography';
// //Import Dynamic
// import dynamic from 'next/dynamic';
// //Import without SSR Slider
// const Slider = dynamic(() => import('@material-ui/core/Slider'), {
//   ssr: false
// });
// //Import Apollo Client
// import { apolloClient } from "../../utils";
// //Import Query GraphQL
// import { GET_CITY_LIST } from "../../graphql/city/queries"
// import { GET_DISTRICT_LIST } from "../../graphql/district/queries";
// import { GET_WARD_LIST } from "../../graphql/ward/queries";
// import { GET_DIRECTIONS } from "../../graphql/directions/queries";
// import { adSellLeaseType, adSellLeaseCategory } from "../../constants";
// import { DataLayeredNavigationProps } from '../../interfaces/interface';
// import Validator from "../../modules/validator";

// function valueText(value: number) {
//   return `${value}`;
// }

// const bedRoomNumber = [
//   { node: { id: 1, value: { max: 2, min: 0 }, name: '0 - 2 phòng' } },
//   { node: { id: 2, value: { max: 5, min: 3 }, name: '3 - 5 phòng' } },
//   { node: { id: 3, value: { max: 100, min: 6 }, name: 'trên 5 phòng' } }
// ];

// interface LayeredNavigationItem {
//   node: {
//     id: string;
//     name: string;
//     slug: string;
//     default_slug: string
//   }
// }

// interface TypeAdSellLeaseItem {
//   id: string;
//   name: string;
//   slug: string;
//   parent_slug: string;
// }

// interface LayeredNavigationBedRoom {
//   node: {
//     id: number;
//     value: RangeValue;
//     name: string;
//   }
// }

// interface LayeredNavigationProps {
//   className: string;
//   updateLayeredNavigation: (data: DataLayeredNavigationProps) => void;
//   dataLayeredNavigation: DataLayeredNavigationProps;
//   typePage: string
// }

// interface RangeValue {
//   max: number;
//   min: number;
// }

// const LayeredNavigation: FunctionComponent<LayeredNavigationProps> = (props: LayeredNavigationProps) => {
//   const [openDirection, setOpenDirection] = React.useState(true);
//   const handleClickDirection = () => {
//     setOpenDirection(!openDirection);
//   };

//   const [openBedRoom, setOpenBedRoom] = React.useState(true);
//   const handleClickBedRoom = () => {
//     setOpenBedRoom(!openBedRoom);
//   };

//   let priceRangeValue = [0, 50];
//   //set Price
//   if (!Validator.isBlank(props.dataLayeredNavigation.price_range.max) || !Validator.isBlank(props.dataLayeredNavigation.price_range.min)) {
//     let minValue = Number(props.dataLayeredNavigation.price_range.min / 1000000000);
//     let maxValue = Number(props.dataLayeredNavigation.price_range.max / 1000000000);
//     priceRangeValue = [minValue, maxValue];
//   }

//   let areaRangeValue = [0, 500];
//   //set AreaRangeValue
//   if (!Validator.isBlank(props.dataLayeredNavigation.area_range.max) || !Validator.isBlank(props.dataLayeredNavigation.area_range.min)) {
//     areaRangeValue = [props.dataLayeredNavigation.area_range.min, props.dataLayeredNavigation.area_range.max];
//   };

//   let idBedRoomNumber = -1;
//   if (Number(props.dataLayeredNavigation.bed_room_number.max) < 3 && Number(props.dataLayeredNavigation.bed_room_number.max) > 0) {
//     idBedRoomNumber = 1;
//   }
//   if (Number(props.dataLayeredNavigation.bed_room_number.max) < 6 && Number(props.dataLayeredNavigation.bed_room_number.max) > 2) {
//     idBedRoomNumber = 2;
//   }
//   if (5 < Number(props.dataLayeredNavigation.bed_room_number.max)) {
//     idBedRoomNumber = 3;
//   }

//   const [priceValue, setPriceValue] = React.useState<number[]>(priceRangeValue);
//   const [areaValue, setAreaValue] = React.useState<number[]>(areaRangeValue);
//   const [citesList, setCitesList] = React.useState<LayeredNavigationItem[]>();
//   const [districtList, setDistrictList] = React.useState<LayeredNavigationItem[]>();
//   const [wardList, setWardList] = React.useState<LayeredNavigationItem[]>();
//   const [directionList, setDirectionList] = React.useState<LayeredNavigationItem[]>();
//   const [activeBedRoom, setActiveBedRoom] = React.useState<number>(idBedRoomNumber);
//   const [activeDirection, setActiveDirection] = React.useState<string>(String(props.dataLayeredNavigation.home_direction));
//   const [typeAdSellLeaseParent, setTypeAddSellLeaseParent] = React.useState<TypeAdSellLeaseItem[]>();
//   const [typeAdSellLeaseChild, setTypeAddSellLeaseChild] = React.useState<TypeAdSellLeaseItem[]>();

//   const closeIcon = (
//     <svg viewBox='0 0 352 512'><path d='M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z' /></svg>
//   );

//   let defaultTypeChild = null;
//   let defaultTypeParent: { type1_slug: any; id?: string; slug?: string; name?: string; parent_slug?: string; } | null = null;
//   let defaultType1Parent: { slug: any; id?: string; name?: string; parent_slug?: string; } | null = null;
//   let defaultParentSlug = '';
//   let parentUpdateASLSlug = '';

//   const updateASLChildType = (slugInput: string) => {
//     let dataChildType = [];
//     for (let indexType in adSellLeaseType) {
//       if (adSellLeaseType[indexType].parent_slug === slugInput) {
//         dataChildType.push(adSellLeaseType[indexType]);
//       }
//     }
//     setTypeAddSellLeaseChild(dataChildType);
//   };

//   if (props.dataLayeredNavigation && props.dataLayeredNavigation.type2) {
//     for (let indexType in adSellLeaseType) {
//       if (adSellLeaseType[indexType].slug === props.dataLayeredNavigation.type_slug) {
//         if (adSellLeaseType[indexType].parent_slug) {
//           defaultTypeChild = adSellLeaseType[indexType];
//           defaultParentSlug = adSellLeaseType[indexType].parent_slug;
//         } else {
//           defaultTypeParent = adSellLeaseType[indexType];
//           parentUpdateASLSlug = adSellLeaseType[indexType].slug;
//         }

//         let type1Slug = adSellLeaseType[indexType].type1_slug;
//         for (let indexType in adSellLeaseCategory) {
//           if (adSellLeaseCategory[indexType].slug === type1Slug) {
//             defaultType1Parent = adSellLeaseCategory[indexType];
//           }
//         }
//       }
//     }
//     if (defaultParentSlug) {
//       for (let indexType in adSellLeaseType) {
//         if (defaultParentSlug === adSellLeaseType[indexType].slug) {
//           defaultTypeParent = adSellLeaseType[indexType];
//         }
//       }
//     }
//     //Set default Type1 ASL
//   }

//   if (props.dataLayeredNavigation && props.dataLayeredNavigation.type1) {
//     for (let indexType in adSellLeaseCategory) {
//       if (adSellLeaseCategory[indexType].slug === props.dataLayeredNavigation.type_slug) {
//         defaultType1Parent = adSellLeaseCategory[indexType];
//       }
//     }
//   }
//   const [defaultAslType2Child, setDefaultAslType2Child] = React.useState<any>(defaultTypeChild);
//   const [defaultAslType2Parent, setDefaultAslType2Parent] = React.useState<any>(defaultTypeParent);
//   const [defaultAslType1Parent, setDefaultAslType1Parent] = React.useState<any>(defaultType1Parent);
//   const [currentAslType2Child, setCurrentAslType2Child] = React.useState<any>(defaultTypeChild);
//   const [currentAslType2Parent, setCurrentAslType2Parent] = React.useState<any>(defaultTypeParent);
//   const [currentAslType1Parent, setCurrentAslType1Parent] = React.useState<any>(defaultType1Parent);

//   let type1SlugString = '';
//   if (props.dataLayeredNavigation.type1) {
//     // @ts-ignore
//     if (!Validator.isBlank(defaultType1Parent) && defaultType1Parent.slug) {
//       // @ts-ignore
//       type1SlugString = defaultType1Parent.slug;
//     }
//   } else {
//     // @ts-ignore
//     if (!Validator.isBlank(defaultTypeParent) && defaultTypeParent.type1_slug) {
//       // @ts-ignore
//       type1SlugString = defaultTypeParent.type1_slug;
//     }
//   }

//   const [type1Slug, setType1Slug] = React.useState<string>(type1SlugString);

//   const updateASLParentType = (type1SlugString: string) => {
//     let dataParentType = [];
//     for (let indexType in adSellLeaseType) {
//       if ((!adSellLeaseType[indexType].parent_slug || Validator.isBlank(!adSellLeaseType[indexType].parent_slug)) && (type1SlugString === adSellLeaseType[indexType].type1_slug)) {
//         dataParentType.push(adSellLeaseType[indexType]);
//       }
//     }
//     setTypeAddSellLeaseParent(dataParentType);
//   };

//   useEffect(() => {
//     if (defaultParentSlug) {
//       updateASLChildType(defaultParentSlug);
//     }
//     if (parentUpdateASLSlug) {
//       updateASLChildType(parentUpdateASLSlug);
//     }

//     if (!Validator.isBlank(props.dataLayeredNavigation.city)) {
//       updateDistrictLayeredNavigation(props.dataLayeredNavigation.city);
//     }
//     if (!Validator.isBlank(props.dataLayeredNavigation.district)) {
//       updateWardLayeredNavigation(props.dataLayeredNavigation.district);
//     }

//     let typeParentASL = [];

//     for (let indexTypeASL in adSellLeaseType) {
//       let parentTypeASL = adSellLeaseType[indexTypeASL].parent_slug;
//       if ((!parentTypeASL || Validator.isBlank(parentTypeASL)) && (type1Slug === adSellLeaseType[indexTypeASL].type1_slug)) {
//         typeParentASL.push(adSellLeaseType[indexTypeASL]);
//       }
//     }
//     setTypeAddSellLeaseParent(typeParentASL);

//   }, []);


//   const filterOptions = createFilterOptions({
//     matchFrom: 'any',
//     stringify: (option: LayeredNavigationItem) => option.node.name,
//   });
//   const filterOptionsASL = createFilterOptions({
//     matchFrom: 'any',
//     stringify: (option: TypeAdSellLeaseItem) => option.name,
//   });

//   const cityDataSelect = {
//     options: citesList,
//     getOptionLabel: (option: LayeredNavigationItem) => option.node.name,
//     filterOptions: filterOptions
//   };

//   const districtDataSelect = {
//     options: districtList,
//     getOptionLabel: (option: LayeredNavigationItem) => option.node.name,
//     filterOptions: filterOptions
//   };

//   const wardDataSelect = {
//     options: wardList,
//     getOptionLabel: (option: LayeredNavigationItem) => option.node.name,
//     filterOptions: filterOptions
//   };

//   const typeAdSellLeaseSelect = {
//     options: typeAdSellLeaseParent,
//     getOptionLabel: (option: TypeAdSellLeaseItem) => option.name,
//     filterOptions: filterOptionsASL
//   };

//   const type1AdSellLeaseSelect = {
//     options: adSellLeaseCategory,
//     getOptionLabel: (option: TypeAdSellLeaseItem) => option.name,
//     filterOptions: filterOptionsASL
//   };

//   const typeAdSellLeaseSelectChild = {
//     options: typeAdSellLeaseChild,
//     getOptionLabel: (option: TypeAdSellLeaseItem) => option.name,
//     filterOptions: filterOptionsASL
//   };

//   const [dataLayeredNavigation, setDataLayeredNavigation] = React.useState<DataLayeredNavigationProps>(props.dataLayeredNavigation);

//   const onChangeCites = (value: LayeredNavigationItem | null) => {
//     if (value) {
//       dataLayeredNavigation.city = value.node.id;
//       dataLayeredNavigation.slug = value.node.default_slug;
//       if (dataLayeredNavigation.type_slug === '/nha-dat-ban') {
//         dataLayeredNavigation.slug = value.node.slug;
//       }
//       updateDistrictLayeredNavigation(value.node.id);
//     } else {
//       dataLayeredNavigation.city = '';
//       dataLayeredNavigation.slug = '';
//     }
//     dataLayeredNavigation.district = '';
//     dataLayeredNavigation.ward = '';
//     resetDataLayeredNavigation();
//     setDistrictList([]);
//     setWardList([]);
//     setDataLayeredNavigation(dataLayeredNavigation);
//     //Set Default Value
//     setDefaultDistrict(defaultValueLocation);
//     setDefaultWard(defaultValueLocation);
//     props.updateLayeredNavigation(dataLayeredNavigation);
//   };

//   const handlePriceChange = (event: any, newValue: number | number[]) => {
//     setPriceValue(newValue as number[]);
//     if (Array.isArray(newValue) && newValue.length != null && newValue.length > 0) {
//       let minValue = 0;
//       let maxValue = 0;
//       newValue.map((value: number, index) => {
//         if (index === 0) {
//           minValue = value;
//         }
//         if (index === 1) {
//           maxValue = value;
//         }
//         let dataToFilter = {
//           min: minValue * 1000000000,
//           max: maxValue * 1000000000
//         };
//         dataLayeredNavigation.price_range = dataToFilter;
//         setDataLayeredNavigation(dataLayeredNavigation);
//         delayUpdateLayeredNavigation(dataLayeredNavigation);
//       });
//     }
//   };

//   const handleAreaChange = (event: any, newValue: number | number[]) => {
//     setAreaValue(newValue as number[]);
//     if (Array.isArray(newValue) && newValue.length != null && newValue.length > 0) {
//       let minValue = 0;
//       let maxValue = 0;
//       newValue.map((value: number, index) => {
//         if (index === 0) {
//           minValue = value;
//         }
//         if (index === 1) {
//           maxValue = value;
//         }
//         let dataToFilter = {
//           min: minValue,
//           max: maxValue
//         };
//         dataLayeredNavigation.area_range = dataToFilter;
//         setDataLayeredNavigation(dataLayeredNavigation);
//         delayUpdateLayeredNavigation(dataLayeredNavigation);
//       });
//     }
//   };

//   let timerId = setTimeout(() => { }, 600);
//   // @ts-ignore
//   const delayUpdateLayeredNavigation = (dataLayeredNavigation: DataLayeredNavigationProps) => {
//     clearTimeout(timerId);
//     timerId = setTimeout(() => {
//       props.updateLayeredNavigation(dataLayeredNavigation);
//     }, 600);
//   };

//   const onChangeDistricts = (value: LayeredNavigationItem | null) => {
//     if (value) {
//       dataLayeredNavigation.district = value.node.id;
//       dataLayeredNavigation.slug = value.node.default_slug;
//       if (dataLayeredNavigation.type_slug === '/nha-dat-ban') {
//         dataLayeredNavigation.slug = value.node.slug;
//       }
//       updateWardLayeredNavigation(value.node.id);
//     } else {
//       let citySlug = defaultCity.node.default_slug;
//       if (dataLayeredNavigation.type_slug === '/nha-dat-ban') {
//         citySlug = defaultCity.node.slug;
//       }
//       dataLayeredNavigation.district = '';
//       dataLayeredNavigation.slug = citySlug;
//     }
//     resetDataLayeredNavigation();
//     dataLayeredNavigation.ward = '';
//     setWardList([]);
//     setDefaultWard(defaultValueLocation);
//     props.updateLayeredNavigation(dataLayeredNavigation);
//   };

//   const onChangeWards = (value: LayeredNavigationItem | null) => {
//     if (value) {
//       dataLayeredNavigation.ward = value.node.id;
//       dataLayeredNavigation.slug = value.node.default_slug;
//       if (dataLayeredNavigation.type_slug === '/nha-dat-ban') {
//         dataLayeredNavigation.slug = value.node.slug;
//       }
//     } else {
//       let districtSlug = defaultDistrict.node.default_slug;
//       if (dataLayeredNavigation.type_slug === '/nha-dat-ban') {
//         districtSlug = defaultDistrict.node.slug;
//       }
//       dataLayeredNavigation.district = '';
//       dataLayeredNavigation.ward = '';
//       dataLayeredNavigation.slug = districtSlug;
//     }
//     resetDataLayeredNavigation();
//     setDataLayeredNavigation(dataLayeredNavigation);
//     props.updateLayeredNavigation(dataLayeredNavigation);
//   };

//   const onChangeType = (value: TypeAdSellLeaseItem | null, isChild: boolean, isType1: boolean) => {
//     dataLayeredNavigation.district = '';
//     dataLayeredNavigation.ward = '';
//     dataLayeredNavigation.city = '';
//     dataLayeredNavigation.slug = '';
//     let slugToUpdateChildType = '';
//     let isResetChildType = false;
//     for (let indexType in adSellLeaseType) {
//       if (value && value.slug && (value.slug === adSellLeaseType[indexType].slug)) {
//         if (!value.parent_slug || Validator.isBlank(value.parent_slug)) {
//           slugToUpdateChildType = adSellLeaseType[indexType].slug;
//           isResetChildType = true;
//         }
//       }
//     }
//     if (isType1) {
//       isResetChildType = true;
//       // @ts-ignore
//       if (value) {
//         setType1Slug(value.slug);
//         setCurrentAslType1Parent(value);
//       }
//       setDefaultAslType2Child([]);
//       setDefaultAslType2Parent([]);
//     } else {
//       if (value) {
//         if (isChild) {
//           setCurrentAslType2Child(value);
//         } else {
//           setCurrentAslType2Parent(value);
//         }
//       }
//       setDefaultAslType2Child([]);
//     }
//     if (isResetChildType) {
//       setTypeAddSellLeaseChild([]);
//     }
//     if (slugToUpdateChildType) {
//       const timer = setTimeout(() => {
//         updateASLChildType(slugToUpdateChildType);
//       }, 200);
//     }

//     resetDataLayeredNavigation();
//     if (isType1) {
//       if (value) {
//         dataLayeredNavigation.type1 = value.id;
//         dataLayeredNavigation.type_slug = value.slug;
//       } else {
//         dataLayeredNavigation.type1 = '';
//         dataLayeredNavigation.type_slug = '';
//       }
//     } else {
//       if (value && value.id) {
//         dataLayeredNavigation.type2 = value.id;
//         dataLayeredNavigation.type_slug = value.slug;
//       } else {
//         dataLayeredNavigation.type2 = '';
//         dataLayeredNavigation.type_slug = '';
//       }
//     }

//     if (isType1) {
//       setTypeAddSellLeaseParent([]);
//       setTypeAddSellLeaseChild([]);
//       const resetParentType = setTimeout(() => {
//         // @ts-ignore
//         if (value) {
//           updateASLParentType(value.slug);
//         }
//       }, 500);
//     }

//     //Reset Parent Case
//     if (!value || !value.slug) {
//       setTypeAddSellLeaseChild([]);
//       if (isChild) {
//         setTypeAddSellLeaseParent([]);
//         setDefaultAslType2Parent(currentAslType2Parent);
//         const resetParentType = setTimeout(() => {
//           updateASLParentType(type1Slug);
//           updateASLChildType(currentAslType2Parent.slug);
//         }, 500);
//         dataLayeredNavigation.type2 = currentAslType2Parent.id;
//         dataLayeredNavigation.type_slug = currentAslType2Parent.slug;

//       }
//       if (!isChild && !isType1) {
//         dataLayeredNavigation.type1 = currentAslType1Parent.id;
//         dataLayeredNavigation.type_slug = currentAslType1Parent.slug;
//       }
//     }

//     setDataLayeredNavigation(dataLayeredNavigation);
//     props.updateLayeredNavigation(dataLayeredNavigation);
//   };

//   const resetDataLayeredNavigation = () => {
//     dataLayeredNavigation.page = 1;
//     dataLayeredNavigation.bed_room_number = {
//       max: 0,
//       min: 0
//     };
//     setActiveBedRoom(-1);
//     dataLayeredNavigation.home_direction = '';
//     setActiveDirection('');
//     dataLayeredNavigation.area_range = {
//       max: 0,
//       min: 0,
//     };
//     dataLayeredNavigation.price_range = {
//       max: 0,
//       min: 0
//     };
//     setPriceValue([0, 50]);
//     setAreaValue([0, 500]);
//     return dataLayeredNavigation;
//   };

//   const onClickDirection = (value: string) => {
//     if (value !== activeDirection) {
//       dataLayeredNavigation.home_direction = value;
//       setActiveDirection(value);
//     } else {
//       dataLayeredNavigation.home_direction = '';
//       setActiveDirection('');
//     }
//     setDataLayeredNavigation(dataLayeredNavigation);
//     props.updateLayeredNavigation(dataLayeredNavigation);
//   };

//   const onClickBedRoom = (value: RangeValue, id: number) => {
//     if (id !== activeBedRoom) {
//       dataLayeredNavigation.bed_room_number = value;
//       setActiveBedRoom(id);
//     } else {
//       dataLayeredNavigation.bed_room_number = {
//         max: 0,
//         min: 0
//       };
//       setActiveBedRoom(-1);
//     }
//     setDataLayeredNavigation(dataLayeredNavigation);
//     props.updateLayeredNavigation(dataLayeredNavigation);
//   };

//   const updateDistrictLayeredNavigation = (cityId: string | null) => {

//   };

//   const updateWardLayeredNavigation = (districtId: string | null) => {

//   };

//   const handleFieldChange = (event: any, title: string, value: string) => {
//     dataLayeredNavigation.name = value;
//     dataLayeredNavigation.title = value;
//     setDataLayeredNavigation(dataLayeredNavigation);
//     delayUpdateLayeredNavigation(dataLayeredNavigation);
//   };

//   let defaultKeywordValue = '';
//   if (!Validator.isBlank(props.dataLayeredNavigation.name)) {
//     defaultKeywordValue = String(props.dataLayeredNavigation.name);
//   }

//   if (!Validator.isBlank(props.dataLayeredNavigation.title)) {
//     defaultKeywordValue = String(props.dataLayeredNavigation.title);
//   }

//   let defaultValueLocation = {
//     node: {
//       id: '',
//       name: '',
//       slug: ''
//     }
//   };

//   const [defaultCity, setDefaultCity] = React.useState<any>(defaultValueLocation);
//   const [defaultDistrict, setDefaultDistrict] = React.useState<any>(defaultValueLocation);
//   const [defaultWard, setDefaultWard] = React.useState<any>(defaultValueLocation);

//   // @ts-ignore
//   // @ts-ignore
//   return (
//     <Grid className={props.className}>
//       <Grid container className="search_layered__title">Lọc kết quả tìm kiếm</Grid>
//       <TextField
//         id="standard-basic"
//         label="Từ khóa"
//         className="search_layered__keyword"
//         defaultValue={defaultKeywordValue}
//         onChange={event => handleFieldChange(event, 'title', event.target.value)}
//       />
//       {
//         (props.typePage === 'ad-sell-lease-location' || props.typePage === 'ad-sell-lease-index') &&
//         <FormControl className="search_layered__select">
//           <Autocomplete
//             {...type1AdSellLeaseSelect}
//             clearOnEscape
//             defaultValue={defaultAslType1Parent}
//             onChange={(event: any, value: TypeAdSellLeaseItem | null) => onChangeType(value, false, true)}
//             renderInput={params => <TextField {...params} label="Hình thức" fullWidth />}
//           />
//         </FormControl>
//       }
//       {
//         (typeAdSellLeaseParent && typeAdSellLeaseParent.length > 0 && (props.typePage === 'ad-sell-lease-location' || props.typePage === 'ad-sell-lease-index')) &&
//         <FormControl className="search_layered__select">
//           <Autocomplete
//             {...typeAdSellLeaseSelect}
//             clearOnEscape
//             defaultValue={defaultAslType2Parent}
//             onChange={(event: any, value: TypeAdSellLeaseItem | null) => onChangeType(value, false, false)}
//             renderInput={params => <TextField {...params} label="Loại nhà đất" fullWidth />}
//           />
//         </FormControl>
//       }
//       {
//         typeAdSellLeaseChild && typeAdSellLeaseChild.length > 0 && (props.typePage === 'ad-sell-lease-location' || props.typePage === 'ad-sell-lease-index') &&
//         <FormControl className="search_layered__select">
//           <Autocomplete
//             {...typeAdSellLeaseSelectChild}
//             clearOnEscape
//             defaultValue={defaultAslType2Child}
//             onChange={(event: any, value: TypeAdSellLeaseItem | null) => onChangeType(value, true, false)}
//             renderInput={params => <TextField {...params} label="Chi tiết Loại nhà đất" fullWidth />}
//           />
//         </FormControl>
//       }
//       <FormControl className="search_layered__select">
//         {
//           // @ts-ignore
//           !Validator.isBlank(citesList) && !Validator.isBlank(citesList.length) && citesList.length > 0 && !Validator.isBlank(defaultCity.node.id) &&
//           <Autocomplete
//             {...cityDataSelect}
//             onChange={(event: any, value: LayeredNavigationItem | null) => onChangeCites(value)}
//             clearOnEscape
//             defaultValue={defaultCity}
//             renderInput={params => <TextField {...params} label="Tỉnh/Thành phố" fullWidth />}
//           />
//         }
//         {
//           // @ts-ignore
//           !Validator.isBlank(citesList) && !Validator.isBlank(citesList.length) && citesList.length > 0 && Validator.isBlank(defaultCity.node.id) &&
//           <Autocomplete
//             {...cityDataSelect}
//             onChange={(event: any, value: LayeredNavigationItem | null) => onChangeCites(value)}
//             clearOnEscape
//             renderInput={params => <TextField {...params} label="Tỉnh/Thành phố" fullWidth />}
//           />
//         }
//       </FormControl>
//       {
//         // @ts-ignore
//         districtList != null && districtList.length != null
//         && districtList.length > 0 && !Validator.isBlank(defaultDistrict.node.id) &&
//         <FormControl className="search_layered__select">
//           <Autocomplete
//             {...districtDataSelect}
//             clearOnEscape
//             defaultValue={defaultDistrict}
//             onChange={(event: any, value: LayeredNavigationItem | null) => onChangeDistricts(value)}
//             renderInput={params => <TextField {...params} label="Quận/Huyện" fullWidth />}
//           />
//         </FormControl>
//       }
//       {
//         // @ts-ignore
//         districtList != null && districtList.length != null
//         && districtList.length > 0 && Validator.isBlank(defaultDistrict.node.id) &&
//         <FormControl className="search_layered__select">
//           <Autocomplete
//             {...districtDataSelect}
//             clearOnEscape
//             onChange={(event: any, value: LayeredNavigationItem | null) => onChangeDistricts(value)}
//             renderInput={params => <TextField {...params} label="Quận/Huyện" fullWidth />}
//           />
//         </FormControl>
//       }
//       {
//         wardList != null && wardList.length != null
//         && wardList.length > 0 && !Validator.isBlank(defaultWard.node.id) &&
//         <FormControl className="search_layered__select margin_bottom">
//           <Autocomplete
//             {...wardDataSelect}
//             clearOnEscape
//             defaultValue={defaultWard}
//             onChange={(event: any, value: LayeredNavigationItem | null) => onChangeWards(value)}
//             renderInput={params => <TextField {...params} label="Phường/Xã" fullWidth />}
//           />
//         </FormControl>
//       }
//       {
//         wardList != null && wardList.length != null
//         && wardList.length > 0 && Validator.isBlank(defaultWard.node.id) &&
//         <FormControl className="search_layered__select margin_bottom">
//           <Autocomplete
//             {...wardDataSelect}
//             clearOnEscape
//             defaultValue={defaultWard}
//             onChange={(event: any, value: LayeredNavigationItem | null) => onChangeWards(value)}
//             renderInput={params => <TextField {...params} label="Phường/Xã" fullWidth />}
//           />
//         </FormControl>
//       }

//       <Typography id="range-slider" gutterBottom className="search_layered__slider__text">
//         Diện tích (m<sup>2</sup>)
//       </Typography>
//       <Slider
//         className="search_layered__slider__content"
//         value={areaValue}
//         onChange={handleAreaChange}
//         valueLabelDisplay="auto"
//         aria-labelledby="range-slider"
//         max={500}
//         getAriaValueText={valueText}
//       />

//       <Typography id="range-slider" gutterBottom className="search_layered__slider__text">
//         Khoảng giá (tỉ đồng)
//       </Typography>
//       <Slider
//         className="search_layered__slider__content"
//         value={priceValue}
//         onChange={handlePriceChange}
//         valueLabelDisplay="auto"
//         aria-labelledby="range-slider"
//         getAriaValueText={valueText}
//         max={50}
//         step={0.5}
//       />

//       <List
//         component="nav"
//         aria-labelledby="nested-list-subheader"
//         className="search_layered__dropdown"
//       >
//         {
//           directionList != null && directionList.length != null
//           && directionList.length > 0 &&
//           <div>
//             <ListItem button onClick={handleClickDirection}>
//               <ListItemText primary="Hướng nhà" className="search_layered__expand" />
//               {openDirection ? <ExpandLess /> : <ExpandMore />}
//             </ListItem>
//             <Collapse in={openDirection} timeout="auto" unmountOnExit className="search_layered__expand__list">
//               {
//                 directionList.map((direction: LayeredNavigationItem, index: number) => {
//                   return <ListItemText
//                     key={"layered_second_" + index}
//                     primary={"Hướng " + direction.node.name}
//                     secondary={closeIcon}
//                     className={(activeDirection === direction.node.id) ? 'search_layered__expand__list__item active' : 'search_layered__expand__list__item'}
//                     onClick={(event: React.MouseEvent<HTMLElement>) => onClickDirection(direction.node.id)}
//                   />
//                 })
//               }
//             </Collapse>
//           </div>
//         }
//         <ListItem button onClick={handleClickBedRoom}>
//           <ListItemText primary="Số phòng" className="search_layered__expand" />
//           {openBedRoom ? <ExpandLess /> : <ExpandMore />}
//         </ListItem>
//         <Collapse in={openBedRoom} timeout="auto" unmountOnExit className="search_layered__expand__list">
//           {
//             bedRoomNumber.map((bedRoom: LayeredNavigationBedRoom, index: number) => {
//               return <ListItemText
//                 key={"layered_navigation_" + index}
//                 primary={bedRoom.node.name}
//                 secondary={closeIcon}
//                 className={(activeBedRoom === bedRoom.node.id) ? 'search_layered__expand__list__item active' : 'search_layered__expand__list__item'}
//                 onClick={(event: React.MouseEvent<HTMLElement>) => onClickBedRoom(bedRoom.node.value, bedRoom.node.id)}
//               />
//             })
//           }
//         </Collapse>
//       </List>
//     </Grid>
//   );
// };
// export default LayeredNavigation;
