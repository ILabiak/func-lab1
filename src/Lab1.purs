module Lab1 where

import Prelude

import Data.List (List(..), (:))
import Effect (Effect)
import Effect.Console (log)

singleton :: forall a. a -> List a
singleton a = Cons a Nil

null :: forall a. List a-> Boolean
null Nil = true
null _ = false

reverse :: List ~> List
reverse = go Nil
  where
  go acc Nil = acc
  go acc (a : b) = go (a : acc) b

snoc :: forall a. List a -> a -> List a
snoc Nil a = (Cons a Nil)
snoc (Cons l a) b = reverse(Cons b(reverse (Cons l a)))

length :: forall a. List a -> Int
length Nil = 0
length (a : list) = length list + 1


test::Effect Unit
test = do
    log $ show $ singleton 1
    log $ show $ null(Cons 1 (Cons 2 Nil))
    log $ show $ snoc (1 : 2 : Nil) 3
    log $ show $ length (1 : 2 : 3 : Nil)