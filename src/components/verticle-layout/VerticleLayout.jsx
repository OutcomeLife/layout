import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { TextField, DropDownMenu, MenuItem, DatePicker, TimePicker } from 'material-ui';
import injectTapEventPlugin from 'react-tap-event-plugin';


class ExampleVerticleLayout extends Component {

    constructor(props) {
        super(props)
        injectTapEventPlugin();
        this.state = { error: {}, value: {}, valueDropdown: {}, currentValue: {} }
        this.handleInput = this.handleInput.bind(this);
        this.handleClickMenuItem = this.handleClickMenuItem.bind(this);
    }

    validate(e, id, regx, errorText, code) {
        let { value, error } = this.state;
        let errorMessage = error;
        if (value[code] !== undefined && value[code].match(regx) && value[code]) {
            if (Object.keys(error).length !== 0) {
                delete errorMessage[code];
                this.setState({ error: errorMessage });            
            }

        } else {
            errorMessage[code] = errorText;
            this.setState({ error: errorMessage });
        }
    }

    handleInput(e,id, validation, error, code, item) {
        let value = this.state.value;
        value[code] = e.target.value;
        this.setState({ value })
        if (e.target.value.length >= 2) {
            this.validate(e,id, validation, error, code);
        }
        this.props.onChange(item, this.state.value);
    }

    handleClickMenuItem(e, value, code) {
        let val = this.state.valueDropdown;
        let curValue = this.state.currentValue;
        if (code in val) {
            val[code][value] = value;
            curValue[code] = value;
        } else {
            val[code] = { [value]: value };
            curValue[code] = value;
        }
        this.setState({ valueDropdown: val, currentValue: curValue });
    }
    handleDatePickerChange = (e, date) => {
        console.log(date);
    }
    
    processAsks() {
        let Asks = [];
        if (this.props.asks === undefined || this.props.asks.length === 0) {
            return Asks;
        } else {
        let asksArray = this.props.asks;
        console.log("askArray", asksArray);
        asksArray.map(data => {
            switch (data.question.attribute.dataType.className) {
                case "java.lang.String":
                let name = null;
                let hasValue = null;
                //if answerlist is not empty
                if(Object.keys(data.answerList).length !== 0) {
                    let name, value;
                data.answerList.answerList.map(answer => {
                    name = data.name;
                    value = answer.valueString;
                    hasValue = value;
                });
                } else {
                    name = data.name;
                }
                    // onBlur={(e) => this.validate(e, data.id, data.validation, data.errorText, data.question.code)}
                    Asks.push(
                        <MuiThemeProvider key={data.id}>
                            <div>
                                <TextField
                                    hintText={name}
                                    floatingLabelText={name}
                                    onBlur={(e) => this.handleInput(e, data.id, data.validation, data.errorText, data.question.code, data)}
                                    errorText={this.state.error === null ? this.state.error : this.state.error[data.code]}
                                    defaultValue={hasValue}
                                />
                            </div>
                        </MuiThemeProvider>);
                    break;
                case "dropdown":
                    const value = () => {
                        if (Object.keys(this.state.valueDropdown).length === 0) {
                            return data.options[0];
                        } else {
                            if (this.state.valueDropdown[data.code] !== undefined) {
                                return this.state.valueDropdown[data.code][this.state.currentValue[data.code]];
                            } else {
                                return data.options[0];
                            }

                        }
                    }
                    Asks.push(
                        <MuiThemeProvider>
                            <div>
                            <DropDownMenu
                                value={value()}
                                style={{ marginLeft: "-25px" }}
                            >
                                {data.options.map(option => <MenuItem value={option} primaryText={option} key={option} onClick={(e) => this.handleClickMenuItem(e, option, data.code)} />)}
                            </DropDownMenu>
                            </div>
                        </MuiThemeProvider>);
                    break;
                case "java.time.LocalDateTime":
                    Asks.push(
                        <MuiThemeProvider key={data.id}>
                            <div style={{marginTop:20}}>
                                <DatePicker hintText={data.name} mode="landscape" onChange={this.handleDatePickerChange}  />
                            </div>
                        </MuiThemeProvider>);
                    break;
                case "time":
                    Asks.push(
                        <MuiThemeProvider>
                            <div>
                            <TimePicker hintText="time picker" />
                            </div>
                        </MuiThemeProvider>);
                    break;
                case "textarea":
                    Asks.push(
                        <MuiThemeProvider>
                            <div>
                                <TextField hintText={data.label} rows={8} floatingLabelText={data.label} multiLine={true} />
                            </div>
                        </MuiThemeProvider>);
                    break;
                default:
                    break;
            }

        })
        }

        return Asks;
        
    }

    render() {
        return (
            <div style={{ marginLeft: "20%" }}>
                {this.processAsks()}
                <p style={{ color: "black" }}> error message : {JSON.stringify(this.state.error, null, 4)} <br />
                    values : {JSON.stringify(this.state.value, null, 4)} <br />
                    valueDropdown: {JSON.stringify(this.state.valueDropdown, null, 4)} <br />
                    currentValue = {JSON.stringify(this.state.currentValue, null, 4)}
                </p>
            </div>
        );
    }
}

export default ExampleVerticleLayout;
