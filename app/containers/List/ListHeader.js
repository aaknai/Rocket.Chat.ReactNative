import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import sharedStyles from '../../views/Styles';
import { themes } from '../../constants/colors';
import I18n from '../../i18n';
import { withTheme } from '../../theme';
import { paddingHorizontal } from './constants';

const styles = StyleSheet.create({
	container: {
		paddingBottom: 12,
		paddingHorizontal
	},
	title: {
		fontSize: 16,
		...sharedStyles.textRegular
	}
});

const ListHeader = ({ title, theme, translateTitle }) => (
	<View style={styles.container}>
		<Text style={[styles.title, { color: themes[theme].infoText }]} numberOfLines={1}>{translateTitle ? I18n.t(title) : title}</Text>
	</View>
);

ListHeader.propTypes = {
	title: PropTypes.string,
	theme: PropTypes.string,
	translateTitle: PropTypes.bool
};

ListHeader.defaultProps = {
	translateTitle: true
};

export default withTheme(ListHeader);