const defaultTheme = {
  DateRange : {
    display       : 'block',
    boxSizing     : 'border-box',
    background    : '#ffffff',
    borderRadius  : '2px',
  },

  Calendar        : {
    width         : 280,
    padding       : 10,
    background    : '#ffffff',
    borderRadius  : '2px',
    display       : 'inline-block',
    boxSizing     : 'border-box',
    letterSpacing : 0,
    color         : '#000000',
  },

  Day : {
    boxSizing     : 'border-box',
    display       : 'inline-block',
    letterSpacing : 'initial',
    textAlign     : 'center',
    fontSize      : 12,
    cursor        : 'pointer',
    transition    : 'transform .1s ease',
  },

  DayPassive : {
    opacity       : 0.4,
    cursor        : 'normal'
  },

  DayHover : {
    background    : '#bdc3c7',
  },

  DayActive : {
    background    : '#95a5a6',
    color         : '#ffffff',
    transform     : 'scale(0.9)',
  },

  DaySelected : {
    background    : '#e74c3c',
    color         : '#ffffff',
  },

  DayInRange : {
    background    : '#34495e',
    color         : '#95a5a6',
  },

  Weekday : {
    boxSizing     : 'border-box',
    display       : 'inline-block',
    letterSpacing : 'initial',
    textAlign     : 'center',
    fontSize      : 12,
    fontWeight    : '600',
    marginBottom  : 1
  },

  MonthAndYear : {
    textAlign     : 'center',
    boxSizing     : 'border-box',
    fontSize      : 12,
    padding       : '10px 0',
    height        : 38,
    lineHeight    : '18px'
  },

  MonthButton : {
    display       : 'block',
    boxSizing     : 'border-box',
    height        : 18,
    width         : 18,
    padding       : 0,
    margin        : '0 10px',
    border        : 'none',
    background    : '#bdc3c7',
    boxShadow     : 'none',
    outline       : 'none',
    borderRadius  : '50%',
  },

  MonthArrow : {
    display       : 'block',
    width         : 0,
    height        : 0,
    padding       : 0,
    margin        : 0,
    border        : '4px solid transparent',
    textAlign     : 'center'
  },

  MonthArrowPrev : {
    borderRightWidth : '6px',
    borderRightColor : '#34495e',
    marginLeft       : 1,
  },

  MonthArrowNext : {
    borderLeftWidth  : '6px',
    borderLeftColor  : '#34495e',
    marginLeft       : 7,
  },

  PredefinedRanges : {
    width         : 140,
    display       : 'inline-block',
    verticalAlign : 'top',
  },

  PredefinedRangeItem : {
    display       : 'block',
    fontSize      : 12,
    color         : '#2c3e50',
    padding       : '10px 14px',
    borderRadius  : '2px',
    background    : '#ecf0f1',
    textDecoration: 'none',
    marginBottom  : 6,
  },

  TimePicker : {
    width         : 350,
    padding       : 10,
    background    : '#ffffff',
    borderRadius  : '2px',
    display       : 'inline-block',
    boxSizing     : 'border-box',
    verticalAlign : 'top',
    letterSpacing : 0,
    color         : '#000000',
  },

  TimeHeader : {
    display       : 'block',
    boxSizing     : 'border-box',
    background    : '#ffffff',
    textAlign     : 'center',
    fontSize      : 12,
    fontWeight    : '600',
    marginBottom  : 5
  },

  Time : {
    boxSizing     : 'border-box',
    display       : 'inline-block',
    letterSpacing : 'initial',
    textAlign     : 'left',
    fontSize      : 12,
    paddingLeft   : 5,
    cursor        : 'pointer',
    transition    : 'transform .1s ease',
    width         : '20%',
  },

  TimePassive : {
    opacity       : 0.4,
    cursor        : 'normal'
  },

  TimeHover : {
    background    : '#bdc3c7',
  },

  TimeActive : {
    background    : '#95a5a6',
    color         : '#ffffff',
    transform     : 'scale(0.9)',
  },

  TimeSelected : {
    background    : '#e74c3c',
    color         : '#ffffff',
  },

  TimeInRange : {
    background    : '#34495e',
    color         : '#95a5a6',
  },

  TimeRange : {
    display       : 'block',
    boxSizing     : 'border-box',
    background    : '#ffffff',
    borderRadius  : '2px',
  },
}

export default (customTheme = {}) => {

  const calendarWidth = (customTheme.Calendar && customTheme.Calendar.width) ||
                        (defaultTheme.Calendar && defaultTheme.Calendar.width);

  const calendarPaddding = (customTheme.Calendar && customTheme.Calendar.padding) ||
                           (defaultTheme.Calendar && defaultTheme.Calendar.padding);

  const cellSize = ( calendarWidth - calendarPaddding * 2 ) / 7;

  return {
    DateRange : { ...defaultTheme.DateRange, ...customTheme.DateRange },

    Calendar : { ...defaultTheme.Calendar, ...customTheme.Calendar },

    Day : {
      width         : cellSize,
      height        : cellSize,
      lineHeight    : cellSize + 'px',
      ...defaultTheme.Day,
      ...customTheme.Day,
    },

    DayPassive : { ...defaultTheme.DayPassive, ...customTheme.DayPassive },

    DayHover : { ...defaultTheme.DayHover, ...customTheme.DayHover },

    DayActive : { ...defaultTheme.DayActive, ...customTheme.DayActive },

    DaySelected : { ...defaultTheme.DaySelected, ...customTheme.DaySelected },

    DayInRange : { ...defaultTheme.DayInRange, ...customTheme.DayInRange },

    Weekday : {
      width         : cellSize,
      height        : cellSize / 2,
      lineHeight    : cellSize / 2 + 'px',
      ...defaultTheme.Weekday,
      ...customTheme.Weekday,
    },

    MonthAndYear : { ...defaultTheme.MonthAndYear, ...customTheme.MonthAndYear },

    MonthButton : { ...defaultTheme.MonthButton, ...customTheme.MonthButton },

    MonthArrow : { ...defaultTheme.MonthArrow, ...customTheme.MonthArrow },

    MonthArrowPrev : { ...defaultTheme.MonthArrowPrev, ...customTheme.MonthArrowPrev },

    MonthArrowNext : { ...defaultTheme.MonthArrowNext, ...customTheme.MonthArrowNext },

    PredefinedRanges : { ...defaultTheme.PredefinedRanges, ...customTheme.PredefinedRanges },

    PredefinedRangeItem : { ...defaultTheme.PredefinedRangeItem, ...customTheme.PredefinedRangeItem },

    TimePicker : { ...defaultTheme.TimePicker, ...customTheme.TimePicker },

    TimeHeader : { ...defaultTheme.TimeHeader, ...customTheme.TimeHeader },

    Time : { ...defaultTheme.Time, ...customTheme.Time },

    TimePassive : { ...defaultTheme.TimePassive, ...customTheme.TimePassive },

    TimeHover : { ...defaultTheme.TimeHover, ...customTheme.TimeHover },

    TimeActive : { ...defaultTheme.TimeActive, ...customTheme.TimeActive },

    TimeSelected : { ...defaultTheme.TimeSelected, ...customTheme.TimeSelected },

    TimeInRange : { ...defaultTheme.TimeInRange, ...customTheme.TimeInRange },

    TimeRange : { ...defaultTheme.TimeRange, ...customTheme.TimeRange },
  }
}
