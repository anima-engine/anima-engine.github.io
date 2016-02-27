initSidebarItems({"fn":[["deprep_terminal","Undo the effects of `rl_prep_terminal()`, leaving the terminal in the state in which it was before the most recent call to `rl_prep_terminal()`."],["prep_terminal","Modify the terminal settings for Readline's use, so `readline()` can read a single character at a time from the keyboard. The `meta_flag` argument should be non-zero if Readline should read eight-bit input."],["reset_terminal","Reinitialize Readline's idea of the terminal settings using `name` as the terminal type (e.g., vt100). If `name` is None, the value of the TERM environment variable is used."],["tty_set_default_bindings","Read the operating system's terminal editing characters (as would be displayed by stty) to their Readline equivalents. The bindings are performed in `kmap`."],["tty_unset_default_bindings","Reset the bindings manipulated by `rl_tty_set_default_bindings` so that the terminal editing characters are bound to `rl_insert`. The bindings are performed in `kmap`."]]});