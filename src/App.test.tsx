import App from './App';
import { act, create } from 'react-test-renderer'; 

test('accesses count variable directly', () => {
  let component:any;
  act(() => {
    component = create(<App />); // Use create to render the component
  });

  if (component) {
    let instance:any;
    act(() => {
      instance = component.root.findByType(App);
    });

    if (instance !== null) {
      console.log('Component instance:', instance);
      const count = instance.state.count;
      console.log('Count:', count);
      expect(count).toBe(0); // Assuming initial count is 0
    } else {
      console.error('Could not find component instance');
    }
  } else {
    console.error('Could not create component');
  }
});


