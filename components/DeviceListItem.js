const { RectButton } = require("react-native-gesture-handler");
import React, { Component } from 'react'

export class DeviceListItem extends Component {

    constructor(props) {
        super(props)
        this.state = {
             
        }
    }

    render() {
        return (
            <div>
                I'm one device in a list of many
            </div>
        )
    }
}

export default DeviceListItem
