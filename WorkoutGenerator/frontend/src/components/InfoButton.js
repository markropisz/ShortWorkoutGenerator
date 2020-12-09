import React from 'react';
import './index.css';
import { Button, notification } from 'antd';
import { InfoOutlined } from '@ant-design/icons';


const openNotification = () => {
    notification.open({
      message: 'Instructions',
      description:
        "This is a simple workout template. You can use it next time you hit the Gym! Just pick one exercise from every category, choose any set and rep scheme and you are good to go! ",
    });
  };

class InfoButton extends React.Component {
    render(){
        return(
            <Button
                icon={<InfoOutlined />}
                onClick={openNotification}
            >
            </Button >
        )
    }
}

export default InfoButton
