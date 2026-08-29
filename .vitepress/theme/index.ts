import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import 'virtual:group-icons.css'
import './custom.css'
import ArticleMeta from './ArticleMeta.vue'


export default {
	extends: DefaultTheme,
	Layout() {
		return h(DefaultTheme.Layout, null, {
			'doc-before': () => h(ArticleMeta)
		})
	}
}