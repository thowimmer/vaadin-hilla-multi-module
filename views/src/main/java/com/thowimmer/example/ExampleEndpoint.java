package com.thowimmer.example;

import com.vaadin.flow.server.auth.AnonymousAllowed;
import com.vaadin.hilla.BrowserCallable;
import com.vaadin.hilla.Nonnull;

@AnonymousAllowed
@BrowserCallable
public class ExampleEndpoint {

    private final ExampleService service;

    ExampleEndpoint(ExampleService service) {
        this.service = service;
    }

    @Nonnull
    public String getText() {
        return service.getText();
    }
}
