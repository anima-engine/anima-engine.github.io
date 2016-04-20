initSidebarItems({"enum":[["MrubyError","An `enum` containing all possbile types of errors."]],"macro":[["describe!","A `macro` useful to run mruby specs. You can pass a tuple of `MrubyFile`s dependencies as a second argument."],["mrfn!","A `macro` useful for defining Rust closures for mruby. Requires `use mrusty::*;`."],["mruby_class!","A `macro` that comes in handy when defining a pure mruby `Class`. It lets you define and control pure mruby types and returns the newly defined `Class`, unlike `mrusty_class!` which also handles Rust types."],["mrusty_class!","A `macro` that comes in handy when defining an mruby `Class` with Rust type reflection. It automates and simplifies the implementation of the `MrubyFile` `trait`. Thus, any type provided to `mrusty_class!` will get an `MrubyFile` implementation, unlike `mruby_class!` which implements a pure mruby class."]],"struct":[["Class","A `struct` that wraps around an mruby `Class`."],["GnuReadLine","A `struct` that implements `ReadLine` with very basic gnureadline functionality. Requires `gnu-readline` build feature."],["Mruby","A safe `struct` for the mruby API. The `struct` only contains creation and desctruction methods. Creating an `Mruby` returns a `MrubyType` (`Rc<RefCell<Mruby>>`) which implements `MrubyImpl` where the rest of the implemented API is found."],["Repl","A `struct` that exposes an `Mruby` to a REPL."],["Spec","A `struct` useful for mruby spec definition and running."],["Value","A `struct` that wraps around any mruby variable."]],"trait":[["ClassLike","A `trait` which connects `Class` & `Module`."],["MrubyFile","A `trait` useful for organising Rust types into dynamic mruby files."],["MrubyImpl","A `trait` used on `MrubyType` which implements mruby functionality."],["ReadLine","A `trait` which performs very basic readline utility."]],"type":[["MrubyType","A `type` wrapper around a `Rc<RefCell<Mruby>>`. Created with `Mruby::new()`."]]});