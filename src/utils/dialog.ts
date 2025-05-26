export function initDialog(index: number) {
  const dialog = document.getElementById(`dialog-overlay-${index}`);
  const closeButton = document.getElementById(`close-dialog-${index}`);

  if (dialog && closeButton) {
    function showDialog() {
      if (dialog) {
        dialog.classList.remove("hidden");
        dialog.classList.add("flex");
        document.body.style.overflow = "hidden";
        // Focus trap
        const focusableElements = dialog.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstFocusable = focusableElements[0];
        const lastFocusable = focusableElements[focusableElements.length - 1];

        if (firstFocusable) {
          firstFocusable.focus();
        }

        // Handle keyboard navigation
        dialog.addEventListener("keydown", function (e) {
          if (e instanceof KeyboardEvent) {
            if (e.key === "Escape") {
              hideDialog();
            }
            if (e.key === "Tab") {
              if (e.shiftKey) {
                if (document.activeElement === firstFocusable) {
                  e.preventDefault();
                  lastFocusable.focus();
                }
              } else {
                if (document.activeElement === lastFocusable) {
                  e.preventDefault();
                  firstFocusable.focus();
                }
              }
            }
          }
        });
      }
    }

    function hideDialog() {
      if (dialog) {
        dialog.classList.remove("flex");
        dialog.classList.add("hidden");
        document.body.style.overflow = "auto";
      }
    }

    // Close dialog when clicking outside
    dialog.addEventListener("click", (e) => {
      if (e.target === dialog) {
        hideDialog();
      }
    });

    closeButton.addEventListener("click", hideDialog);

    // Make dialog globally accessible with index
    (window as any)[`showWebsiteDialog${index}`] = showDialog;
  }
}
