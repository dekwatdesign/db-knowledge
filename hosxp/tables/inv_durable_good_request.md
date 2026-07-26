# `inv_durable_good_request`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| inv_durable_good_request_id | int(11) | NO | PRI | 0 |  |  |
| inv_durable_good_req_status | char(1) | YES |  | NULL |  |  |
| inv_durable_good_req_unit | float | YES |  | NULL |  |  |
| inv_durable_good_req_price | float | YES |  | NULL |  |  |
| inv_durable_good_req_sum | float | YES |  | NULL |  |  |
| inv_durable_good_req_reson | varchar(250) | YES |  | NULL |  |  |
| inv_durable_good_req_usage | varchar(250) | YES |  | NULL |  |  |
| inv_durable_good_id | int(11) | YES |  | NULL |  |  |
| quot_filename | text | YES |  | NULL |  |  |
| inv_durable_good_quot_doc | blob | YES |  | NULL |  |  |
| spec_filename | text | YES |  | NULL |  |  |
| inv_durable_good_spec_doc | blob | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | inv_durable_good_request_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
