# `stock_representative`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_representative_id | int(11) | NO | PRI | 0 |  |  |
| stock_rep_pname | varchar(50) | YES |  | NULL |  |  |
| stock_rep_fname | varchar(100) | YES |  | NULL |  |  |
| stock_rep_lname | varchar(100) | YES |  | NULL |  |  |
| stock_rep_post_name | varchar(150) | YES |  | NULL |  |  |
| stock_rep_nick_name | varchar(100) | YES |  | NULL |  |  |
| stock_rep_phone | varchar(100) | YES |  | NULL |  |  |
| stock_rep_mobile | varchar(100) | YES |  | NULL |  |  |
| stock_rep_email | varchar(100) | YES |  | NULL |  |  |
| stock_rep_note | text | YES |  | NULL |  |  |
| stock_rep_first_contact_date | date | YES |  | NULL |  |  |
| stock_rep_last_contact_date | date | YES |  | NULL |  |  |
| stock_rep_type_id | int(11) | YES |  | NULL |  |  |
| stock_rep_line_id | varchar(100) | YES |  | NULL |  |  |
| stock_rep_active | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | stock_representative_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
