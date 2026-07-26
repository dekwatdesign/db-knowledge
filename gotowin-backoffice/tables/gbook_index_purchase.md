# `gbook_index_purchase`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| BOOK_ID | int | NO | PRI | NULL | auto_increment |  |
| BOOK_NUM_IN | int | YES |  | NULL |  |  |
| BOOK_NUMBER | varchar(100) | YES |  |  |  |  |
| BOOK_DATE | date | YES |  | NULL |  |  |
| BOOK_URGENT_ID | varchar(10) | YES |  |  |  |  |
| BOOK_TYPE_ID | varchar(10) | YES |  |  |  |  |
| BOOK_NAME | varchar(200) | YES |  |  |  |  |
| BOOK_DETAIL | text | YES |  | NULL |  |  |
| BOOK_ORG_ID | int | YES |  | NULL |  |  |
| BOOK_ORG_TO_ID | int | YES |  | NULL |  |  |
| PERSON_SAVE_ID | varchar(10) | YES |  |  |  |  |
| DATE_TIME_SAVE | datetime | YES |  | NULL |  |  |
| BOOK_YEAR_ID | varchar(10) | YES |  |  |  |  |
| BOOK_SECRET_ID | int | YES |  | NULL |  |  |
| IMAGE | longblob | YES |  | NULL |  |  |
| BOOK_DATE_EXPIRE | date | YES |  | NULL |  |  |
| DATE_SAVE | date | YES |  | NULL |  |  |
| BOOK_HAVE_FILE | enum('True','False') | YES |  | False |  |  |
| BOOK_FILE_SIZE | varchar(100) | YES |  |  |  |  |
| BOOK_READ | enum('True','False') | YES |  | False |  | อ่านแล้วหรือยัง นับการอ่าน 1 ครั้งขึ้นไป |
| SEND_LD_HR_NAME | varchar(500) | YES |  |  |  |  |
| SEND_LD_BY_HR_NAME | varchar(500) | YES |  |  |  |  |
| SEND_LD_DETAIL | varchar(500) | YES |  |  |  |  |
| SEND_STATUS | varchar(20) | YES |  |  |  | สถานะการส่งผอ.เกษียร |
| SEND_LD_HR_ID | int | YES |  | NULL |  |  |
| SEND_LD_DATE | date | YES |  | NULL |  |  |
| SEND_LD_DATE_TIME | datetime | YES |  | NULL |  |  |
| TIME_SAVE | time | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | BOOK_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
