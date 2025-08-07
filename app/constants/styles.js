import { StyleSheet } from 'react-native';
import colors from './colors';
import spacing from './spacing';
import typography from './typography';
import borderRadius from './borderRadius';

const styles = StyleSheet.create({
  // Main container
  container: {
    width: '100%',
    height: '100%',
    marginTop: 0,
    padding: spacing.padding,
    fontFamily: 'SFProDisplay-Regular',
  },
  
  // Header stuff
  viewbox: {
    marginTop: 0,
    borderBottomColor: colors.categoryRed,
    borderStyle: 'dashed',
    borderRadius: borderRadius.xl,
    marginBottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: spacing.sm,
    height: 90,
  },
  
  TextStyle: {
    height: 41,
    width: 100,
    fontWeight: typography.bold,
    letterSpacing: typography.letterSpacing,
    fontSize: typography.xxxl,
    color: colors.text,
    left: 5,
  },
  
  // Buttons
  ADD: {
    backgroundColor: colors.buttonSecondary,
    position: 'sticky',
    fontSize: typography.xxxl,
    fontWeight: typography.regular,
    height: 50,
    borderWidth: 3,
    color: colors.primary,
    paddingHorizontal: 14,
    paddingVertical: 0,
    borderColor: colors.primary,
    borderRadius: borderRadius.round,
  },
  
  // Task containers
  taskContainer: {
    width: 550,
    padding: spacing.lg,
    paddingBottom: 18,
    borderRadius: borderRadius.lg,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  
  tick: {
    height: 30,
    width: 30,
    borderRadius: borderRadius.round,
    borderWidth: 2.8,
    borderColor: colors.overlay,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  tickText: {
    fontSize: typography.lg,
    color: colors.danger,
    textAlign: 'center',
  },
  
  texttodo: {
    fontSize: typography.lg,
    letterSpacing: typography.letterSpacingWide,
    fontWeight: typography.regular,
  },
  
  dot: {
    right: 0,
    height: 13,
    width: 13,
    borderRadius: borderRadius.round,
    backgroundColor: colors.danger,
    marginLeft: spacing.md,
  },
  
  // Modal styles
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.modalBg,
    padding: spacing.xl,
  },
  
  modalContent: {
    backgroundColor: colors.background,
    borderRadius: borderRadius.xxl,
    padding: spacing.xl,
    alignItems: 'center',
    marginBottom: 430,
  },
  
  // Add task modal
  Addtasktext: {
    fontSize: typography.xxl,
    fontWeight: typography.bold,
    letterSpacing: typography.letterSpacingWide,
    color: colors.text,
    marginBottom: spacing.lg,
  },
  
  Addtaskmsgbx: {
    height: 50,
    width: '100%',
    borderColor: colors.border,
    borderWidth: 0.9,
    borderRadius: spacing.md,
    paddingHorizontal: spacing.md,
    fontSize: typography.md,
    marginBottom: spacing.lg,
  },
  
  AddtaskTimeInput: {
    height: 40,
    width: '100%',
    borderColor: colors.border,
    borderWidth: 0.9,
    borderRadius: spacing.md,
    paddingHorizontal: spacing.md,
    fontSize: typography.md,
    marginBottom: spacing.md,
  },
  
  Addtaskcd: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  
  AddtaskDone: {
    fontSize: typography.lg,
    color: colors.primary,
    fontWeight: typography.semiBold,
    marginHorizontal: spacing.md,
  },
  
  AddtaskCreate: {
    fontSize: typography.lg,
    fontWeight: typography.regular,
    color: colors.primary,
    marginHorizontal: spacing.md,
  },
  
  TexttodoView: {
    display: 'flex',
    flexDirection: 'row',
    gap: spacing.xl,
  },
  
  // Action buttons
  delete: {
    backgroundColor: colors.buttonDanger,
    paddingHorizontal: 7,
    paddingVertical: spacing.md,
    borderRadius: spacing.md,
    color: colors.textLight,
  },
  
  timediv: {
    width: 120,
  },
  
  edit: {
    backgroundColor: colors.buttonDark,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.md,
    borderRadius: spacing.md,
    color: colors.textLight,
  },
  
  editdel: {
    display: 'flex',
    flexDirection: 'row',
    gap: spacing.xs,
  },
  
  editBox: {
    height: 45,
    width: 320,
    color: colors.text,
    borderColor: colors.border,
    borderWidth: 0.9,
    borderRadius: spacing.md,
    paddingHorizontal: spacing.md,
    fontSize: typography.md,
  },
  
  doneBtn: {
    paddingHorizontal: spacing.sm,
    paddingVertical: 3,
    borderRadius: spacing.md,
    backgroundColor: colors.danger,
  },
  
  // Dropdown stuff
  label: {
    position: 'absolute',
    backgroundColor: colors.background,
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: spacing.sm,
    fontSize: typography.xs,
  },
  
  dropdown: {
    height: 50,
    borderColor: colors.borderLight,
    borderWidth: 0.5,
    borderRadius: spacing.sm,
    paddingHorizontal: spacing.sm,
  },
  
  // Story view
  storyContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: spacing.md,
  },
  
  storyItem: {
    height: 80,
    width: 80,
    borderRadius: borderRadius.circle,
  },
  
  storyPink: {
    backgroundColor: colors.categoryPink,
  },
  
  storyCyan: {
    backgroundColor: colors.categoryCyan,
  },
  
  // Category modal
  categoryModal: {
    backgroundColor: colors.background,
    height: '100%',
    width: '100%',
    top: 30,
    borderRadius: borderRadius.xxxl,
    padding: spacing.md,
    gap: 30,
  },
  
  categoryHandle: {
    backgroundColor: colors.text,
    opacity: 0.47,
    height: 10,
    width: 95,
    top: 10,
    borderRadius: spacing.md,
    left: '39.7%',
  },
  
  categoryHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
  },
  
  categoryTitle: {
    fontSize: typography.huge,
    fontWeight: typography.extraBold,
    letterSpacing: typography.letterSpacingWide,
    opacity: 0.9,
  },
  
  categoryEditIcon: {
    fontSize: 28,
    fontWeight: typography.medium,
  },
  
  categoryTaskContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xl,
    marginTop: spacing.md,
    paddingLeft: spacing.sm,
  },
  
  categoryTaskItem: {
    borderBottomWidth: 1,
    paddingBottom: spacing.lg,
    width: '100%',
  },
  
  categoryTaskTitle: {
    fontSize: 25,
    fontWeight: typography.medium,
  },
  
  categoryTaskTime: {
    opacity: 0.9,
  },
  
  // Color preview
  colorPreviewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.md,
    paddingHorizontal: spacing.paddingH,
    paddingVertical: spacing.paddingV,
    backgroundColor: colors.inputBg,
    borderRadius: spacing.sm,
  },
  
  colorPreviewDot: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginRight: spacing.md,
  },
  
  colorPreviewText: {
    fontSize: typography.sm,
    color: colors.textSecondary,
  },
  
  // Dropdown custom
  dropdownContainer: {
    height: 50,
    width: 370,
    marginBottom: spacing.xl,
    borderWidth: 1,
    borderColor: colors.borderLight,
    borderRadius: spacing.sm,
    paddingHorizontal: spacing.paddingH,
  },
  
  dropdownItemText: {
    fontSize: typography.sm,
    color: colors.textSecondary,
  },
  
  dropdownPlaceholder: {
    fontSize: typography.sm,
    color: colors.textMuted,
  },
  
  dropdownSelectedText: {
    fontSize: typography.sm,
    color: colors.textSecondary,
  },
  
  // Screen styles
  screenContainer: {
    flex: 1,
    backgroundColor: colors.surface,
  },
  
  screenScrollView: {
    flex: 1,
  },
  
  screenHeader: {
    padding: spacing.xl,
    backgroundColor: colors.secondary,
  },
  
  screenTitle: {
    fontSize: typography.xl,
    fontWeight: typography.bold,
    color: colors.textLight,
    textAlign: 'center',
  },
});

export default styles;