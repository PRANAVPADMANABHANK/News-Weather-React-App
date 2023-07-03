import { useEffect, useState } from 'react';

const useUnsavedChangesWarnings = (message = 'Are you sure you want to discard changes?') => {
  const [isDirty, setDirty] = useState(false);

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      if (isDirty) {
        event.preventDefault();
        event.returnValue = message;
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [isDirty, message]);

  return { setDirty, setClean: () => setDirty(false) };
};

export default useUnsavedChangesWarnings;
