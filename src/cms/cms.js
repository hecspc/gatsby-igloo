import CMS from 'netlify-cms-app'

import IndexPagePreview from './preview-templates/IndexPagePreview'

import { ctaEditorConfig } from "./editor-components/call-to-action.editor"



CMS.registerPreviewTemplate('button', IndexPagePreview)

// Extend editor
CMS.registerEditorComponent(ctaEditorConfig)