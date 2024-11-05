package com.thowimmer.example;

import com.vaadin.flow.server.auth.AnonymousAllowed;
import com.vaadin.hilla.BrowserCallable;
import com.vaadin.hilla.Nonnull;

@AnonymousAllowed
@BrowserCallable
public class ExampleEndpoint {

    @Nonnull
    public String getText() {
        return "Hello from Endpoint!";
    }
}
