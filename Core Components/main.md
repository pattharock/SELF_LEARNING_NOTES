# Core Components

In Expo and React Native, components are translated to native components for the platform it’s running on. To help you get started, React Native provides a set of ready-to-use components for your app. These components are called “core components” and most of them have built-in Android and iOS implementations. Lets take a dive into some of the core components in React Native.

## View Component

With View, you can create responsive layouts using flexbox or add basic styling to nested components.

The component is best comparable with a div HTML element. Just like div, the View component is not visible unless styling is applied. We can apply this styling through the style property.

    <View style={{ width: 250, backgroundColor: 'yellow' }}>
      ...
    </View>

Note that Expo and React Native don’t use CSS. This method of styling is not available on native platforms. Instead of using CSS, we can write our styling using plain JavaScript objects.


## Text Component

Because Expo and React Native translate components to their native counterpart, they aren’t exactly similar to plain React. With web, you can render text anywhere in the document without adding parent elements. On native platforms like Android and iOS, that’s not possible.

To render text on Android and iOS, the string needs to be wrapped in a `Text` component. With this component, you can render and style text. It can also inherit styling from a parent Text component, perfect for emphasizing certain words.

    <Text
     style={
       { 
         fontSize: 16 
        }
      }
    > The <Text style={
                { 
                  fontWeight: 'bold' 
                }
          }> quick brown fox
          </Text> 
      jumps over the lazy dog
    </Text>