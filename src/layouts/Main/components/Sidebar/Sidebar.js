import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Divider, Drawer } from '@material-ui/core';
import PeopleIcon from '@material-ui/icons/People';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import SettingsIcon from '@material-ui/icons/Settings';
import CastIcon from '@material-ui/icons/Cast';
import ScheduleIcon from '@material-ui/icons/Schedule';
import ViewListIcon from '@material-ui/icons/ViewList';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import LiveHelpRoundedIcon from '@material-ui/icons/LiveHelpRounded';

import { Profile, SidebarNav, /*UpgradePlan*/ } from './components';

const useStyles = makeStyles(theme => ({
  drawer: {
    width: 240,
    [theme.breakpoints.up('lg')]: {
      marginTop: 64,
      height: 'calc(100% - 64px)'
    }
  },
  root: {
    backgroundColor: theme.palette.white,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: theme.spacing(2)
  },
  divider: {
    margin: theme.spacing(2, 0)
  },
  nav: {
    marginBottom: theme.spacing(2)
  }
}));

const Sidebar = props => {
  const { open, variant, onClose, className, ...rest } = props;

  const classes = useStyles();

  const pages = [
    {
      title: 'FAQs',
      href: '/faqs',
      icon: <LiveHelpRoundedIcon />
    },
    {
      title: 'Broadcasts',
      href: '/#',
      items: [
        { title: 'Schedule', href: '/schedule', icon: <ScheduleIcon /> },
        { title: 'Broadcasts', href: '/broadcasts', icon: <ViewListIcon /> },
      ],
      icon: <CastIcon />
    },
    {
      title: 'Messages',
      href: '/chat',
      icon: <QuestionAnswerIcon />
    },
    {
      title: 'Users',
      href: '/users',
      icon: <PeopleIcon />
    },
    {
      title: 'Account',
      href: '/account',
      icon: <AccountBoxIcon />
    },
    {
      title: 'Settings',
      href: '/settings',
      icon: <SettingsIcon />
    }
  ];

  return (
    <Drawer
      anchor="left"
      classes={{ paper: classes.drawer }}
      onClose={onClose}
      open={open}
      variant={variant}
    >
      <div
        {...rest}
        className={clsx(classes.root, className)}
      >
        <Profile />
        <Divider className={classes.divider} />
        <SidebarNav
          className={classes.nav}
          pages={pages}
        />
        {/* <UpgradePlan /> */}
      </div>
    </Drawer>
  );
};

Sidebar.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired
};

export default Sidebar;
