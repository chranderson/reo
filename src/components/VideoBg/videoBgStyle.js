const style = {
  videoBg: {
    position: 'absolute',
    zIndex: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  videoCover: {
    position: 'absolute',
    zIndex: 1,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    background: '#000000',
    transition: 'opacity 0.3s, transform 0.3s ease',
  },

  control:  {
    position: 'absolute',
    zIndex: 3,
    bottom: 20,
    left: 20,
    borderRadius: '50%',
    height: 50,
    width: 50,
    boxShadow: '0 1px 3px 2px rgba(0,0,0,0.2)',
    background: 'rgba(255,255,255,0.1)',
    cursor: 'pointer',
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 12,
    userSelect: 'none'
  }
};

export default style;
