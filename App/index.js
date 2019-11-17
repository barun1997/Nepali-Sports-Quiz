import Quiz from './screens/Quiz';
import QuizIndex from './screens/QuizIndex';
import QuizSummary from './screens/QuizSummary';
import { createStackNavigator, createAppContainer } from 'react-navigation';

const MainStack = createStackNavigator({

  QuizIndex: {
    screen: QuizIndex,
    navigationOptions: {
      headerTitle: 'Nepali Quizzes by Barun'
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: ({ navigation }) => ({
      headerTitle: navigation.getParam('title'),
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: navigation.getParam('color'),
        borderBottomColor: navigation.getParam('color')
      },
    }),
  },

  QuizSummary: {
    screen: QuizSummary,
    navigationOptions: {
      headerTitle: 'This is your score'
    }
  },
});

export default createAppContainer(MainStack);