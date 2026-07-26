# `grecord_back`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ID | int | NO | PRI | NULL | auto_increment |  |
| RECORD_ID | varchar(10) | YES |  |  |  |  |
| RECORD_NAME | varchar(150) | YES |  |  |  |  |
| OWN_ID | varchar(10) | YES |  |  |  | ผู้บันทึก |
| OWN_NAME | varchar(150) | YES |  |  |  |  |
| OWN_POSITION | varchar(255) | YES |  |  |  |  |
| OWN_DEP | varchar(255) | YES |  |  |  |  |
| RECORD_TYPE_NAME | varchar(255) | YES |  |  |  |  |
| RECORD_ORG_NAME | varchar(255) | YES |  |  |  | จัดโดย |
| LOCATION_NAME | varchar(255) | YES |  |  |  | สถานที่จัด |
| DATE_GO | datetime | YES |  | NULL |  |  |
| DATE_BACK | datetime | YES |  | NULL |  |  |
| DATE_SUM | decimal(10,2) | YES |  | NULL |  |  |
| DAY_TYPE_NAME | varchar(255) | YES |  |  |  |  |
| MONEY_HOS | decimal(10,2) | YES |  | NULL |  |  |
| MONEY_ETC | varchar(10) | YES |  | NULL |  |  |
| DATE_TIME_SAVE | datetime | YES |  | NULL |  |  |
| DETAIL | text | YES |  | NULL |  |  |
| DATE_REPORT | date | YES |  | NULL |  |  |
| LEADER_ID | varchar(10) | YES |  |  |  | หัวหน้าผู้รับรอง |
| LEADER_NAME | varchar(100) | YES |  |  |  |  |
| BOOK_NUM | varchar(50) | YES |  |  |  |  |
| BOOK_ID | varchar(10) | YES |  |  |  |  |
| MONEY_FROM_ID | varchar(10) | YES |  |  |  | เบิกเงินจาก |
| BOOK_DATE_REG | date | YES |  | NULL |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
