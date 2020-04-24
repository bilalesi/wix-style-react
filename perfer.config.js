const javascriptFiles = [
  ['Accordion.bundle.min.js', 33],
  ['AddItem.bundle.min.js', 44],
  ['AnnouncementModalLayout.bundle.min.js', 18],
  ['AutoComplete.bundle.min.js', 71],
  ['AutoCompleteWithLabel.bundle.min.js', 69],
  ['Avatar.bundle.min.js', 54],
  ['Badge.bundle.min.js', 13],
  ['BadgeSelect.bundle.min.js', 54],
  ['BadgeSelectItemBuilder.bundle.min.js', 9],
  ['BarChart.bundle.min.js', 43],
  ['BaseModalLayout.bundle.min.js', 20],
  ['Box.bundle.min.js', 5],
  ['Breadcrumbs.bundle.min.js', 11],
  ['BrowserPreviewWidget.bundle.min.js', 7],
  ['Button.bundle.min.js', 10],
  ['Calendar.bundle.min.js', 74],
  ['CalendarPanel.bundle.min.js', 75],
  ['CalendarPanelFooter.bundle.min.js', 81],
  ['Card.bundle.min.js', 23],
  ['CardGalleryItem.bundle.min.js', 65],
  ['Carousel.bundle.min.js', 68],
  ['Checkbox.bundle.min.js', 44],
  ['CheckToggle.bundle.min.js', 37],
  ['CircularProgressBar.bundle.min.js', 43],
  ['CloseButton.bundle.min.js', 15],
  ['Collapse.bundle.min.js', 9],
  ['ColorInput.bundle.min.js', 81],
  ['ColorPicker.bundle.min.js', 80],
  ['ComposerHeader.bundle.min.js', 20],
  ['ContactItemBuilder.bundle.min.js', 54],
  ['CounterBadge.bundle.min.js', 3.5],
  ['CustomModalLayout.bundle.min.js', 20],
  ['DatePicker.bundle.min.js', 94],
  ['Divider.bundle.min.js', 4],
  ['Dropdown.bundle.min.js', 78],
  ['DropdownBase.bundle.min.js', 50],
  ['DropdownLayout.bundle.min.js', 48],
  ['EditableSelector.bundle.min.js', 75],
  ['EditableTitle.bundle.min.js', 63],
  ['EmptyState.bundle.min.js', 10],
  ['EndorseContentLayout.bundle.min.js', 9],
  ['FilePicker.bundle.min.js', 50],
  ['FillButton.bundle.min.js', 52],
  ['FillPreview.bundle.min.js', 18],
  ['FloatingHelper.bundle.min.js', 49],
  ['FloatingNotification.bundle.min.js', 25],
  ['FontUpgrade.bundle.min.js', 3],
  ['FormField.bundle.min.js', 44],
  ['GenericModalLayout.bundle.min.js', 4],
  ['GoogleAddressInput.bundle.min.js', 73],
  ['GooglePreview.bundle.min.js', 9],
  ['Grid.bundle.min.js', 8],
  ['Heading.bundle.min.js', 8],
  ['Highlighter.bundle.min.js', 4],
  ['IconButton.bundle.min.js', 14],
  ['Image.bundle.min.js', 5],
  ['ImageViewer.bundle.min.js', 58],
  ['InfoIcon.bundle.min.js', 41],
  ['Input.bundle.min.js', 62],
  ['InputArea.bundle.min.js', 46],
  ['InputWithLabel.bundle.min.js', 64],
  ['InputWithOptions.bundle.min.js', 71],
  ['Label.bundle.min.js', 8],
  ['LabelledElement.bundle.min.js', 10],
  ['Layout.bundle.min.js', 3],
  ['LinearProgressBar.bundle.min.js', 47],
  ['ListItemAction.bundle.min.js', 13],
  ['ListItemEditable.bundle.min.js', 60],
  ['ListItemSection.bundle.min.js', 13],
  ['ListItemSelect.bundle.min.js', 45],
  ['Loader.bundle.min.js', 44],
  ['MarketingLayout.bundle.min.js', 12],
  ['MediaOverlay.bundle.min.js', 14],
  ['MessageModalLayout.bundle.min.js', 20],
  ['MobilePreviewWidget.bundle.min.js', 7],
  ['Modal.bundle.min.js', 11],
  ['ModalMobileLayout.bundle.min.js', 9],
  ['ModalPreviewLayout.bundle.min.js', 46],
  ['ModalSelectorLayout.bundle.min.js', 84],
  ['MultiSelect.bundle.min.js', 100],
  ['MultiSelectCheckbox.bundle.min.js', 74],
  ['NestableList.bundle.min.js', 29],
  ['NoBorderInput.bundle.min.js', 63],
  ['Notification.bundle.min.js', 29],
  ['NumberInput.bundle.min.js', 63],
  ['Page.bundle.min.js', 36],
  ['PageHeader.bundle.min.js', 28],
  ['Pagination.bundle.min.js', 10],
  ['Palette.bundle.min.js', 16],
  ['Popover.bundle.min.js', 29],
  ['PreviewWidget.bundle.min.js', 6],
  ['Proportion.bundle.min.js', 3],
  ['RadioGroup.bundle.min.js', 13],
  ['Range.bundle.min.js', 100],
  ['RichTextInputArea.bundle.min.js', 166],
  ['Search.bundle.min.js', 74],
  ['SectionHelper.bundle.min.js', 24],
  ['SegmentedToggle.bundle.min.js', 43],
  ['Selector.bundle.min.js', 48],
  ['SidePanel.bundle.min.js', 48],
  ['Sidebar.bundle.min.js', 7],
  ['SidebarBackButton.bundle.min.js', 12],
  ['SidebarDivider.bundle.min.js', 7],
  ['SidebarHeader.bundle.min.js', 11],
  ['SidebarSectionItem.bundle.min.js', 15],
  ['SidebarSectionTitle.bundle.min.js', 10],
  ['Skeleton.bundle.min.js', 5],
  ['Slider.bundle.min.js', 45],
  ['SocialButton.bundle.min.js', 17],
  ['SocialPreview.bundle.min.js', 9],
  ['SortableList.bundle.min.js', 30],
  ['StatisticsWidget.bundle.min.js', 47],
  ['StatisticsWidget.bundle.min.js', 47],
  ['StatusIndicator.bundle.min.js', 38],
  ['StatusIndicator.bundle.min.js', 44],
  ['Stepper.bundle.min.js', 15],
  ['Swatches.bundle.min.js', 86],
  ['Table.bundle.min.js', 68],
  ['TableActionCell.bundle.min.js', 62],
  ['TableToolbar.bundle.min.js', 14],
  ['Tabs.bundle.min.js', 42],
  ['Tag.bundle.min.js', 21],
  ['Text.bundle.min.js', 8],
  ['TextButton.bundle.min.js', 14],
  ['Thumbnail.bundle.min.js', 14],
  ['TimeInput.bundle.min.js', 84],
  ['TimeTable.bundle.min.js', 74],
  ['ToggleButton.bundle.min.js', 43],
  ['ToggleSwitch.bundle.min.js', 17],
  ['Tooltip.bundle.min.js', 40],
  ['VariableInput.bundle.min.js', 107],
  ['VerticalTabs.bundle.min.js', 13],
  ['VerticalTabsItem.bundle.min.js', 13],
  ['WarningIndicator.bundle.min.js', 40],
];

const cssFiles = [
  ['Accordion.min.css', 2],
  ['AddItem.min.css', 2],
  ['AutoComplete.min.css', 7],
  ['AutoCompleteComposite.min.css', 7],
  ['AutoCompleteWithLabel.min.css', 7],
  ['BadgeSelect.min.css', 3],
  ['BarChart.min.css', 2],
  ['Box.min.css', 1],
  ['Breadcrumbs.min.css', 1],
  ['BrowserPreviewWidget.min.css', 1],
  ['Calendar.min.css', 5],
  ['CalendarPanel.min.css', 5],
  ['CalendarPanelFooter.min.css', 5],
  ['Card.min.css', 2],
  ['CardGalleryItem.min.css', 3],
  ['Carousel.min.css', 10],
  ['Checkbox.min.css', 2],
  ['CheckToggle.min.css', 1],
  ['ColorInput.min.css', 6],
  ['ColorPicker.min.css', 6],
  ['ContactItemBuilder.min.css', 1],
  ['DataTable.min.css', 3],
  ['DatePicker.min.css', 8],
  ['Dropdown.min.css', 7],
  ['DropdownBase.min.css', 3],
  ['DropdownLayout.min.css', 3],
  ['EditableSelector.min.css', 7],
  ['EditableTitle.min.css', 6],
  ['EmptyState.min.css', 1],
  ['EndorseContentLayout.min.css', 1],
  ['ErrorIndicator.min.css', 2],
  ['FilePicker.min.css', 3],
  ['FillButton.min.css', 2],
  ['FillPreview.min.css', 1],
  ['FloatingNotification.min.css', 1],
  ['FontUpgrade.min.css', 1],
  ['FormField.min.css', 3],
  ['GenericModalLayout.min.css', 1],
  ['GoogleAddressInput.min.css', 12],
  ['GoogleAddressInputWithLabel.min.css', 12],
  ['Grid.min.css', 4],
  ['ImageViewer.min.css', 3],
  ['InfoIcon.min.css', 2],
  ['Input.min.css', 6],
  ['InputArea.min.css', 3],
  ['InputWithLabel.min.css', 6],
  ['InputWithOptions.min.css', 7],
  ['LabelledElement.min.css', 1],
  ['Layout.min.css', 1],
  ['ListItemEditable.min.css', 5],
  ['ListItemSelect.min.css', 2],
  ['Loader.min.css', 2],
  ['MarketingLayout.min.css', 1],
  ['MobilePreviewWidget.min.css', 1],
  ['Modal.min.css', 1],
  ['ModalPreviewLayout.min.css', 2],
  ['ModalSelectorLayout.min.css', 9],
  ['MultiSelect.min.css', 8],
  ['MultiSelectCheckbox.min.css', 7],
  ['MultiSelectComposite.min.css', 8],
  ['NoBorderInput.min.css', 6],
  ['Notification.min.css', 2],
  ['NumberInput.min.css', 6],
  ['Page.min.css', 3],
  ['PageHeader.min.css', 2],
  ['Pagination.min.css', 1],
  ['Palette.min.css', 1],
  ['PopoverMenu.min.css', 4],
  ['PopoverMenuItem.min.css', 1],
  ['PreviewWidget.min.css', 1],
  ['Proportion.min.css', 1],
  ['RadioGroup.min.css', 2],
  ['Range.min.css', 8],
  ['RichTextInputArea.min.css', 6],
  ['Search.min.css', 7],
  ['SectionHelper.min.css', 1],
  ['SegmentedToggle.min.css', 2],
  ['Selector.min.css', 3],
  ['SidePanel.min.css', 2],
  ['Sidebar.min.css', 2],
  ['Skeleton.min.css', 1],
  ['Slider.min.css', 2],
  ['StatisticsWidget.min.css', 2],
  ['StatusIndicator.min.css', 1],
  ['Swatches.min.css', 7],
  ['Table.min.css', 3],
  ['TableActionCell.min.css', 6],
  ['TableToolbar.min.css', 1],
  ['Tabs.min.css', 2],
  ['Tag.min.css', 2],
  ['TimeInput.min.css', 6],
  ['TimeTable.min.css', 2],
  ['ToggleButton.min.css', 2],
  ['Tooltip.min.css', 2],
  ['VariableInput.min.css', 2],
  ['WarningIndicator.min.css', 2],
];

const getJS = () =>
  javascriptFiles.map(([name, size]) => ({
    maxSize: `${size}kb`,
    glob: `.perfer/dist/statics/${name}`,
  }));

const getCSS = () =>
  cssFiles.map(([name, size]) => ({
    maxSize: `${size}kb`,
    glob: `.perfer/dist/statics/${name}`,
  }));

module.exports = {
  bundleSize: {
    files: [...getJS(), ...getCSS()],
  },
};
