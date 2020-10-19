const { RectButton } = require("react-native-gesture-handler");
import React, { Component } from 'react'

//Native-base
import { Text, Card, CardItem, Body } from 'native-base';

export class DeviceListItem extends Component {

    constructor(props) {
        super(props)
        this.state = {
             
        }
    }

    render() {
        return (
            <Card>
                <CardItem>
                    <Body>
                        <Text>
                            {this.props.title}
                        </Text>
                    </Body>
                </CardItem>
            </Card>
        )
    }
}

export default DeviceListItem
