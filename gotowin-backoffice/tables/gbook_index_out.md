# `gbook_index_out`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| BOOK_ID | int | NO | PRI | NULL | auto_increment |  |
| BOOK_NUM_OUT | int | YES |  | NULL |  |  |
| BOOK_NUMBER | varchar(100) | YES |  |  |  |  |
| BOOK_DATE | date | YES |  | NULL |  |  |
| BOOK_URGENT_ID | varchar(10) | YES |  |  |  |  |
| BOOK_TYPE_ID | varchar(10) | YES |  |  |  |  |
| BOOK_TYPE_OUT_ID | varchar(11) | YES |  |  |  |  |
| BOOK_NAME | varchar(200) | YES |  |  |  |  |
| BOOK_DETAIL | varchar(600) | YES |  | NULL |  |  |
| BOOK_ORG_ID | varchar(10) | YES |  |  |  |  |
| BOOK_ORG_TO_ID | varchar(10) | YES |  |  |  |  |
| PERSON_SAVE_ID | varchar(10) | YES |  |  |  |  |
| DATE_TIME_SAVE | datetime | YES |  | NULL |  |  |
| BOOK_YEAR_ID | varchar(10) | YES |  |  |  |  |
| BOOK_SECRET_ID | varchar(10) | YES |  |  |  |  |
| IMAGE | longblob | YES |  | NULL |  |  |
| BOOK_DATE_EXPIRE | date | YES |  | NULL |  |  |
| DATE_SAVE | date | YES |  | NULL |  |  |
| BOOK_HAVE_FILE | enum('True','False') | YES |  | False |  |  |
| BOOK_FILE_SIZE | varchar(100) | YES |  |  |  |  |
| BOOK_NUM_IN | int | YES |  | NULL |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |
| BOOK_FILE_NAME | varchar(255) | YES |  | NULL |  |  |

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
