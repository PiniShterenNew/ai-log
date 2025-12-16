import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import { Header, PageShell, Stack } from './design-system';
import { cn } from './design-system/utils';

function App() {
  return (
    <div className={cn('h-full flex flex-col overflow-hidden')}>
      <Header
        title="AI Question Log"
        user={{ name: 'Current User' }}
        onSettingsClick={() => {
          // TODO: Implement settings
          console.log('Settings clicked');
        }}
      />
      <div className={cn('flex-1 overflow-hidden')}>
        <PageShell className={cn('h-full flex flex-col')}>
          <Stack variant="section" className={cn('flex-1 overflow-hidden')}>
            <RouterProvider router={router} />
          </Stack>
        </PageShell>
      </div>
    </div>
  )
}

export default App
