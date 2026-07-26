# `handicapped_certificate_comment`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| handicapped_certificate_comment_id | int(11) | NO | PRI | 0 |  |  |
| handicapped_certificate_comment_a | char(10) | YES |  | NULL |  |  |
| handicapped_certificate_comment_b | char(10) | YES |  | NULL |  |  |
| handicapped_certificate_comment_b_text | char(10) | YES |  | NULL |  |  |
| handicapped_certificate_comment_c | char(10) | YES |  | NULL |  |  |
| handicapped_certificate_comment_c_text | char(10) | YES |  | NULL |  |  |
| handicapped_certificate_comment_d | char(10) | YES |  | NULL |  |  |
| handicapped_certificate_comment_d_text | char(10) | YES |  | NULL |  |  |
| handicapped_certificate_comment_e | char(10) | YES |  | NULL |  |  |
| handicapped_certificate_comment_e_text | char(10) | YES |  | NULL |  |  |
| handicapped_certificate_comment_f | char(10) | YES |  | NULL |  |  |
| handicapped_certificate_comment_f_text | char(10) | YES |  | NULL |  |  |
| handicapped_status_group | char(10) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | handicapped_certificate_comment_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
