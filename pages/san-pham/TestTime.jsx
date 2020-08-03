
import React from 'react';
import PropTypes from 'prop-types';
// import { FormattedRelative as IntlFormattedRelative, FormattedDate } from 'react-intl';
import moment from 'moment';
import { Tooltip } from '@material-ui/core';
// import ShortTime from './ShortTime';

class FormattedRelative extends React.PureComponent {
    constructor(props) {
        super(props);
        const { value } = props;
        this.state = {
            timeNow: moment(),
            timeStart: moment(moment()).startOf('day')
        };
        this.timeValue = moment(value);
        this.timeValueOut = moment(value).startOf('day');
    }

    componentDidMount() {
        this.startSetTimeout();
    }
    componentDidUpdate() {
        this.startSetTimeout();
    }
    componentWillUnmount() {
        clearTimeout(this.timerID);
    }

    componentWillReceiveProps(nextProps) {
        const { value } = this.props;
        if (value !== nextProps.value) {
            this.setState({ timeNow: moment(), timeStart: moment().startOf('day') });
            this.timeValue = moment(nextProps.value);
            this.timeValueOut = moment(nextProps.value).startOf('day');
        }
    }

    startSetTimeout = () => {
        let nextTime = 0;
        let timeFix = false;
        const { timeNow, timeStart } = this.state;
        const { typeSetTime = '' } = this.props;

        if (timeStart.diff(this.timeValue, 'seconds') <= 60) {
            // Số  s nhỏ hơn 60s
            nextTime = moment(this.timeValue).add(60, 'seconds');
        } else if (timeStart.diff(this.timeValueOut, 'days') <= 7) {
            // Số  day nhỏ hơn 7
            nextTime = moment(this.timeValue).add(7, 'days').endOf('day');
        } else if (timeStart.diff(this.timeValueOut, 'years') === 0) {
            nextTime = moment(this.timeValue).endOf('year');
            timeFix = true; // Time đã cố định => không cần setTimeOut để tính lại.
        }
        clearTimeout(this.timerID);
        const nextTimeDays = nextTime.diff(timeStart, 'days');
        const nextTimeSeconds = nextTime.diff(timeStart, 'seconds');
        // Fix cho một số trường hợp thư viện tính sai thành giá trị âm.
        if (timeFix || (nextTime > 0 && nextTimeDays < 0) || (nextTime > 0 && nextTimeSeconds < 0)) {
            return;
        }

        if (nextTime > 0 && nextTimeDays <= 2) {
            // Tính số giây còn lại từ hiện tại tới thời điểm tiếp theo để đặt timer tới thời điểm đó sẽ render lại.
            const delta = nextTime.diff(timeNow, 'seconds') * 1000;
            console.log('delta', delta);
            if (delta >= 0) {
                this.timerID = setTimeout(this.reRender, delta);
            }
        }
    };

    reRender = () => {
        this.setState({ timeNow: moment(), timeStart: moment().startOf('day') });
    };

    renderTime(time) {
        const { value, shortMode, parentId, ...otherProps } = this.props;
        const { timeNow, timeStart } = this.state;
        const weekday = shortMode ? 'short' : 'long';
        const timeSeconds = timeNow.diff(this.timeValue, 'seconds');
        const timeDay = timeStart.diff(this.timeValueOut, 'days');
        const timeYear = timeStart.diff(this.timeValueOut, 'years');
        const getDay = new Date().getDay();
        // if (timeSeconds <= 60) {
        //     return <span> Vừa xong </span>
        // } else if (timeDay <= 2) {
        //     return shortMode
        //         ? <p>HHHHH</p>
        //         : <IntlFormattedRelative {...otherProps} value={time} />
        // } else if (timeDay < getDay) {
        //     return <FormattedDate {...otherProps} value={time} weekday={weekday} />
        // } else if (timeYear === 0) {
        //     return <FormattedDate {...otherProps} value={time} day="2-digit" month="2-digit" />
        // } else {
        //     <FormattedDate {...otherProps} value={time} />
        // }
        return <p>Xin loi</p>
    }

    render() {
        const { value } = this.props;
        const time = new Date(value);
        const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' };
        if (value !== 0) {
            return (
                <Tooltip mouseEnterDelay={0.5} placement="bottomLeft" title={time.toLocaleString('vi', options)}>
                    <time>
                        {this.renderTime(time)}
                    </time>
                </Tooltip>
            );
        }
        return null;
    }
}

FormattedRelative.propTypes = {
    value: PropTypes.number,
    shortMode: PropTypes.bool,
    parentId: PropTypes.string,
};

export default FormattedRelative