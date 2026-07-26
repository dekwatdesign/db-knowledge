# `supply_order`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ID | bigint unsigned | NO | PRI | NULL | auto_increment | รหัส |
| CODE | varchar(255) | NO |  | NULL |  | รหัส |
| NOTE | varchar(255) | NO |  | NULL |  | เหตุผลขอเบิก |
| DEPARTMENT_ID | int | NO |  | NULL |  | หน่วยงาน |
| PERSON_ID | int | NO |  | NULL |  | เจ้าหน้าที่ |
| STATUS_ID | int | NO |  | NULL |  | สถานะ |
| created_at | timestamp | YES |  | NULL |  |  |
| updated_at | timestamp | YES |  | NULL |  |  |

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
