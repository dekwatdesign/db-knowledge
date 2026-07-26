# `gbook_send_announce_leader`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| SEND_LD_ID | int | NO | PRI | NULL | auto_increment |  |
| BOOK_LD_ID | int | YES |  | NULL |  | อ้างถึงฟิว id ใน book_index |
| SEND_LD_HR_ID | int | YES |  | NULL |  |  |
| SEND_LD_HR_NAME | varchar(500) | YES |  |  |  |  |
| SEND_LD_BY_HR_ID | int | YES |  | NULL |  |  |
| SEND_LD_BY_HR_NAME | varchar(500) | YES |  |  |  |  |
| SEND_LD_DETAIL | varchar(500) | YES |  |  |  |  |
| SEND_LD_DATE | date | YES |  | NULL |  |  |
| SEND_LD_DATE_TIME | datetime | YES |  | NULL |  |  |
| SEND_LD_STATUS | varchar(20) | YES |  |  |  | สถานะการส่งผอ.เกษียร |
| TOP_LEADER_AC_ID | int | YES |  | NULL |  |  |
| TOP_LEADER_AC_NAME | varchar(50) | YES |  |  |  |  |
| TOP_LEADER_AC_DATE | date | YES |  | NULL |  |  |
| TOP_LEADER_AC_CMD | varchar(255) | YES |  |  |  |  |
| TOP_LEADER_AC_DATE_TIME | datetime | YES |  | NULL |  |  |
| TOP_LEADER_ORDER_FILE | varchar(255) | YES |  | NULL |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |
| SEND_LD_BY_HR_ID_2 | int | YES |  | NULL |  |  |
| SEND_LD_BY_HR_NAME_2 | varchar(500) | YES |  | NULL |  |  |
| SEND_LD_DETAIL_2 | varchar(500) | YES |  | NULL |  |  |
| SEND_LD_DATE_2 | date | YES |  | NULL |  |  |
| SEND_LD_DATE_TIME_2 | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | SEND_LD_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
