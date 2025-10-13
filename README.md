# ui

> the source code for my (uncommon) shadcn components (and their documentation page)

To see a list of the components, either visit [ui.bartoszbak.org](https://ui.bartoszbak.org), or go to the [ui](registry/default/ui) directory.

To install a component, use the following command:

> [!IMPORTANT]
> You must have shadcn installed to install these components. See the [shadcn documentation](https://ui.shadcn.com/docs/installation) for more information.

```bash
bunx --bun shadcn@latest add https://ui.bartoszbak.org/r/cornered-button.json
```

To use a component, import it from the `@/components/ui` directory.

```tsx
import { CorneredButton } from "@/components/ui/cornered-button";

<CorneredButton>Cornered Button</CorneredButton>;
```

### Contributing

To contribute to the project, please see the [contributing guide](https://ui.bartoszbak.org/?item=contributing).

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
