# `passport_reader`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| passport_reader_id | int(11) | NO | PRI | 0 |  |  |
| passport_no | varchar(15) | YES |  | NULL |  |  |
| pname | varchar(25) | YES |  | NULL |  |  |
| fname | varchar(30) | YES |  | NULL |  |  |
| lname | varchar(30) | YES |  | NULL |  |  |
| birthday | date | YES |  | NULL |  |  |
| sex | char(1) | YES |  | NULL |  |  |
| expire_date | date | YES |  | NULL |  |  |
| nationality | char(3) | YES |  | NULL |  |  |
| mrz | text | YES |  | NULL |  |  |
| patient_image | longblob | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | passport_reader_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
