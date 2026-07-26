# `hsk_assessment_ass01_drug`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int(10) | NO | PRI | 0 |  |  |
| hn | char(9) | YES | MUL | NULL |  |  |
| an | char(9) | YES | MUL | NULL |  |  |
| icode_name | varchar(200) | YES |  | NULL |  |  |
| icode_name2 | varchar(200) | YES |  | NULL |  |  |
| vstdate | date | YES |  | NULL |  |  |
| vsttime | time | YES |  | NULL |  |  |
| staff | varchar(100) | YES |  | NULL |  |  |
| d_update | timestamp | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| an | an | no | 1 |
| hn | hn | no | 1 |
| PRIMARY | id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
