# `person_lab_head`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_lab_head_id | int(11) | NO | PRI | 0 |  |  |
| person_id | int(11) | YES | MUL | NULL |  |  |
| lab_order_date | date | YES | MUL | NULL |  |  |
| lab_order_time | time | YES |  | NULL |  |  |
| lab_order_note_text | text | YES |  | NULL |  |  |
| lab_form_name | varchar(200) | YES |  | NULL |  |  |
| hospcode | varchar(9) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_lab_order_date | lab_order_date | no | 1 |
| ix_lab_order_date_pid | lab_order_date | no | 1 |
| ix_lab_order_date_pid | person_id | no | 2 |
| ix_person_id | person_id | no | 1 |
| PRIMARY | person_lab_head_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
