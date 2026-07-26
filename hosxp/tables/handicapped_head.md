# `handicapped_head`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| handicapped_head_id | int(11) | NO | PRI | 0 |  |  |
| handicapped_head_number | char(10) | YES |  | NULL |  |  |
| handicapped_head_vdate | date | YES |  | NULL |  |  |
| handicapped_head_vtime | time | YES |  | NULL |  |  |
| handicapped_head_location | char(10) | YES |  | NULL |  |  |
| handicapped_head_doctor | char(10) | YES |  | NULL |  |  |
| handicapped_head_deformend | char(50) | YES |  | NULL |  |  |
| handicapped_head_diag | char(50) | YES |  | NULL |  |  |
| handicapped_head_diag_text | char(50) | YES |  | NULL |  |  |
| handicapped_status_group | char(10) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | handicapped_head_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
