import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import Checkbox from '@mui/material/Checkbox';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import makeStyles from '@mui/styles/makeStyles';
export default function UserForm() {
    const [zip, setZip] = React.useState('');
    const handleChange = (event) => {
        setZip(event.target.value);
    };
    const onSubmit = data => {
        console.log(JSON.stringify(data, null, 2));
    };

    function handleSubmit(event) {
        // event.preventDefault();
        console.log("form has been submitted: ");
    }
    const customStyles = {
        inputLabel: {
            color: 'white',
        },
        input: {
            color: 'white',
            borderBottomColor: 'white',
        },
        select: {
            color: 'white',
        },
        textField: {
            border: '1px solid white',
        },
        underline: {
            '::before': {
                borderBottomColor: '1px solid #fff',
            },
            // 'root::before' {
            //     border-bottom: 1px solid #fff
            // },
            '&:after': {
                borderBottomColor: 'white',
            },
            '&:hover:not(.Mui-disabled):before': {
                borderBottomColor: 'white',
            },
        },
    };
    const useStyles = makeStyles((theme) => ({

        textField: {
            border: "1px solid blue"
        }
    }));
    // const useStyles = makeStyles(theme => ({

    //     root: {
    //       "& > *": {
    //         margin: theme.spacing(1),
    //         width: "25ch"
    //     }
    //     },
    //     textField: {
    //         border: "1px solid blue"
    //     }

    //     }));

    const classes = useStyles();
    return (

        <div className='text-white' >


            <Box px={3} py={2}
                className='bg-[#408bc0] relative rounded-tl-[60px] rounded-br-[60px] rounded-tr-[10px] rounded-bl-[10px] 
                overflow-auto m-0 text-white mb-[50px] [box-shadow:0_0_0_30px_#408bc0_inset!important]
                '>
                <div className='mt-10 mb-20'>
                    <h2 className='font-bold text-xl text-left'>Ready to harness the power of the sun?</h2>
                    <h2 className='text-xl text-left'> Let's start with a little about you:</h2>

                    <Grid container spacing={1}>
                        <Grid item xs={12} sm={12}>
                            <TextField
                                required
                                id="standard-basic fullName"
                                name="fullName"
                                label="Full Name"
                                fullWidth
                                variant="standard"
                                className={classes.textField}
                                InputLabelProps={{
                                    style: customStyles.inputLabel,
                                }}
                                InputProps={{
                                    style: customStyles.input,
                                    disableUnderline: true, // Disable default underline
                                }}
                                sx={{
                                    borderBottom: "1px solid white"
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <TextField
                                required
                                id="standard-basic email"
                                name="email"
                                label="Email Address"
                                fullWidth
                                variant="standard"
                                InputLabelProps={{
                                    style: customStyles.inputLabel,
                                }}
                                InputProps={{
                                    style: customStyles.input,
                                    disableUnderline: true, // Disable default underline
                                }}
                                sx={{
                                    borderBottom: "1px solid white"
                                }}
                            // sx={{
                            //     '& .MuiInputBase-root': {
                            //         borderBottom: '1px solid white', // Add custom borderBottom
                            //     },
                            // }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                id="standard-number phone"
                                label="Phone"
                                type="number"
                                variant="standard"
                                required
                                name="phone"
                                fullWidth
                                InputLabelProps={{
                                    style: customStyles.inputLabel,
                                    // shrink: true,
                                }}
                                InputProps={{
                                    style: customStyles.input,
                                    disableUnderline: true, // Disable default underline
                                }}
                                sx={{
                                    borderBottom: "1px solid white"
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="standard-basic zip"
                                name="zip"
                                label="ZIP code or city"
                                variant="standard"
                                fullWidth
                                className={classes.textField}
                                InputLabelProps={{
                                    style: customStyles.inputLabel,
                                }}
                                InputProps={{
                                    style: customStyles.input,
                                    disableUnderline: true, // Disable default underline
                                }}
                                sx={{
                                    borderBottom: "1px solid white"
                                }}
                            />
                            {/* <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label" style={customStyles.inputLabel}>ZIP code or city *</InputLabel>
                            <Select
                                required
                                labelId="demo-simple-select-label"
                                id="demo-simple-select standard-basic"
                                value={zip}
                                label="ZIP code or city"
                                variant="standard"
                                // onChange={handleChange}
                                style={customStyles.select}
                                inputProps={{
                                    style: customStyles.select,
                                    disableUnderline: true, // Disable default underline
                                }}


                                sx={{
                                    borderBottom: "1px solid white",
                                    '&:hover:not(.Mui-disabled):before': {
                                        borderBottom: '1px solid white',
                                    },
                                    '&:before': {
                                        borderBottom: '1px solid white', // Add custom borderBottom for normal state
                                    },
                                    '&:after': {
                                        borderBottom: '1px solid white', // Add custom borderBottom for focused state
                                    },
                                }}
                            >
                                <MenuItem value={1}>10001</MenuItem>
                                <MenuItem value={2}>10002</MenuItem>
                                <MenuItem value={3}>10003</MenuItem>
                            </Select>
                        </FormControl> */}
                        </Grid>
                        {/* <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    label="Confirm Password"
                                    type="password"
                                    fullWidth
                                    margin="dense"
                                />
                            </Grid> */}
                        <Grid item xs={12}>
                            <h2 className='text-left font-semibold'>I'm interested in the following products *</h2>
                            <div className="flex gap-6 flex-wrap ml-[-10px] mb-6">
                                {/* <div class="inline-flex items-center cursor-pointer">
                                        <input id="Solar" aria-checked="true" class="custom-checkbox-input invisible" type="checkbox" value="Solar" name="Solar" data-gtm-form-interact-field-id="0" />
                                        <label for="Solar" class="w-8 h-8 rounded-xs transition-colors duration-100 flex justify-center align-middle bg-green-50 border-green-50">
                                            <img alt="Tick Icon" width="32" height="32" decoding="async" data-nimg="1" class=" scale-75" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjMiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAyMyAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIxLjMxMjUgMS40Mzc5OUw4LjE4NzUgMTQuNTYyNEwxLjYyNSA4LjAwMDQ5IiBzdHJva2U9IiMxNzFCMUYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=" style={{ color: 'transparent' }} data-uw-rm-alt-original="Tick Icon" />
                                        </label>
                                        <label for="Solar">
                                            <p class="font-normal text-black-80 text-base leading-25 ml-4">Solar</p>
                                        </label>
                                    </div> */}
                                <div className="inline-flex items-center cursor-pointer">
                                    <Checkbox
                                        id="Solar"
                                        aria-checked="false"
                                        className="custom-checkbox-input"
                                        type="checkbox" value="Solar" name="Solar"
                                        sx={{
                                            color: 'white', // Change the color of the checkbox
                                            '& .MuiSvgIcon-root': { fontSize: 35 },
                                            '&.Mui-checked': {
                                                color: 'white',
                                            },
                                        }}
                                    />
                                    <label htmlFor="Solar">
                                        <p className="font-normal text-base leading-25 ml-4">Solar</p>
                                    </label>
                                </div>
                                <div className="inline-flex items-center cursor-pointer">
                                    <Checkbox id="Roofing" aria-checked="false" className="custom-checkbox-input"
                                        type="checkbox" value="Roofing" name="Roofing"
                                        sx={{
                                            color: 'white', // Change the color of the checkbox
                                            '& .MuiSvgIcon-root': { fontSize: 35 },
                                            '&.Mui-checked': {
                                                color: 'white',
                                            },
                                        }}
                                    />
                                    <label htmlFor="Roofing">
                                        <p className="font-normal text-base leading-25 ml-4">Roofing</p>
                                    </label>
                                </div>
                                <div className="inline-flex items-center cursor-pointer">
                                    <Checkbox id="Home Batteries" aria-checked="false" className="custom-checkbox-input"
                                        type="checkbox" value="Home Batteries" name="Home Batteries"
                                        sx={{
                                            color: 'white', // Change the color of the checkbox
                                            '& .MuiSvgIcon-root': { fontSize: 35 },
                                            '&.Mui-checked': {
                                                color: 'white',
                                            },
                                        }}



                                    />
                                    <label htmlFor="Home Batteries">
                                        <p className="font-normal text-base leading-25 ml-4">Home Batteries</p>
                                    </label>
                                </div>
                            </div>

                        </Grid>
                        {/* <div>
                            <div className="">
                                <div
                                    className="" >
                                    Recaptcha requires verification.
                                </div>
                                <div className="">
                                    <label className="">
                                        I'm not a robot</label>
                                </div>
                            </div>
                            <div className="">
                                <div className="">reCAPTCHA</div>
                                <div className="">
                                    <a href="https://www.google.com/intl/en/policies/privacy/" >Privacy</a>
                                    <span aria-hidden="true" > - </span>
                                    <a href="https://www.google.com/intl/en/policies/terms/" >Terms</a>

                                </div>
                            </div>
                        </div> */}


                        <p className="text-white text-left font-normal">
                            By clicking on “Get Started”, I agree by electronic signature to: (1) receive recurring automated marketing and other calls, texts, and prerecorded messages from Trinity Solar at the number I entered above, even if I am on a "Do Not Call" list (consent not required to make a purchase, msg &amp; data rates apply, reply STOP to opt-out of texts or HELP for help); (2) recurring marketing and nonmarketing emails; and (3) the
                            <a href="https://www.trinity-solar.com/privacy-policy/" target="_blank" >Privacy Policy</a>. Message and data rates apply.
                        </p>

                    </Grid>

                    <Box mt={3} display="flex" justifyContent="center">

                        <Button
                            variant="contained"

                            onClick={handleSubmit(onSubmit)}
                            sx={{
                                backgroundColor: '#2ecc71',
                                color: 'white',
                                padding: '10px 50px',
                                borderRadius: '25px',
                                marginTop: '35px',
                                '&:hover': {
                                    backgroundColor: '#27ae60',
                                }
                            }}
                        >
                            Get Started
                        </Button>
                    </Box>

                </div>


            </Box >
        </div >
    )
}
