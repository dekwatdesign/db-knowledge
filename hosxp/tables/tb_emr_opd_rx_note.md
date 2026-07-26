# `tb_emr_opd_rx_note`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| hos_guid | varchar(40) | NO | PRI |  |  |  |
| vn | varchar(15) | NO | PRI |  |  |  |
| hn | varchar(10) | NO | PRI |  |  |  |
| icode | varchar(10) | NO | PRI |  |  |  |
| rx_note_text | text | YES |  | NULL |  |  |
| rx_note_datetime | datetime | NO | PRI | 0000-00-00 00:00:00 |  |  |
| loginname | varchar(50) | YES |  | NULL |  |  |
| rx_note_user | varchar(200) | YES |  | NULL |  |  |
| rx_note_status | char(2) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | hos_guid | yes | 1 |
| PRIMARY | vn | yes | 2 |
| PRIMARY | hn | yes | 3 |
| PRIMARY | icode | yes | 4 |
| PRIMARY | rx_note_datetime | yes | 5 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
