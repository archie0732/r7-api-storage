# 作業3

## 作業中的"空格"、"冒號"、"逗號"皆使用"英文輸入法"

設計一個 Book class (書籍類別)，包括以下屬性與方法：

- 屬性：
title (書名, 字串)
author (作者, 字串)
price (價格, 單位為新台幣)
year (出版年份, 整數)
publisher (出版社, 字串)

- 方法：
get_title() : 取得書名
get_author() : 取得作者
get_price() : 取得價格
get_year() : 取得出版年份
get_publisher() : 取得出版社
set_title(string t) : 設定書名
set_author(string a) : 設定作者
set_price(int p) : 設定價格
set_year(int y) : 設定出版年份
set_publisher(string p) : 設定出版社

接著，設計一個 Bookstore class (書店類別)，包括以下屬性與方法：

- 屬性：
name (書店名稱, 字串)
books (書籍清單, 陣列)

方法：
add_book(Book b) : 新增一本書至書店的書籍清單
remove_book(Book b) : 從書店的書籍清單中移除一本書
search_book_by_title(string title) : 搜尋書店的書籍清單，並回傳標題符合 title 的書籍清單
search_book_by_author(string author) : 搜尋書店的書籍清單，並回傳作者符合 author 的書籍清單
search_book_by_publisher(string publisher) : 搜尋書店的書籍清單，並回傳出版社符合 publisher 的書籍清單

輸入格式：
第一行輸入一個整數 n (1 <= n <= 100)，表示接下來有 n 筆資料。

接下來 n 行，每行依序輸入書籍的書名、作者、價格、出版年份、出版社，以空格隔開。其中，價格為正整數，出版年份為四位數，書名、作者、出版社為一個不超過 20 個字元的字串，不含空格。

接下來一行輸入書店的名稱，為一個不超過 20 個字元的字串，不含空格。

輸出格式：
第一行輸出 "Welcome to [書店名稱]!"。
第二行輸出 "Here are our books:"。

接下來輸出書店的書籍清單，每本書的資訊佔一行，格式為 "[書名] by [作者], [價格] NTD, [出版年份], [出版社]"。

接下來一行輸出 "Search books:"。

接下來三行，每行輸入一個搜尋條件，分別為搜尋書名、作者、出版社，以空格隔開。

最後輸出符合搜尋條件的書籍清單，每本書的資訊佔一行，格式與書店的書籍清單相同。



#### 範例

- 輸入
```md
4
The_Grea_ Gatsby F. Scott_Fitzgerald 500 1925 Scribner
To_Kil_ a_Mockingbird Harper_Lee 400 1960 J. B. Lippincott
1984 George_Orwell 300 1949 Secker_&_Warburg
Brav_ New_World Aldous_Huxley 350 1932 Chatto_&_Windus
Bookstore 123
```
- 輸出

```md
Welcome to Bookstore 123!
Here are our books:
The_Great_Gatsby by F. Scott_Fitzgerald, 500 NTD, 1925, Scribner
To_Kill _ Mockingbird by Harper_Lee, 400 NTD, 1960, J. B. Lippincott
1984 by George_Orwell, 300 NTD, 1949, Secker_&_Warburg
Brave_New_World by Aldous_Huxley, 350 NTD, 1932, Chatto_&_Windus
Search books:
```
- 再輸入
```md
To_Kill_a_Mockingbird
Harper_Lee
J. B. Lippincott
```
- 再輸出
```md
To_Kill_a_Mockingbird by Harper_Lee, 400 NTD, 1960, J. B. Lippincott
```

