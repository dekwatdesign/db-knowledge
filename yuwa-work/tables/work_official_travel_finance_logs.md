# `work_official_travel_finance_logs`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | bigint | NO | PRI | NULL | auto_increment |  |
| travel_id | int | NO | MUL | NULL |  |  |
| action | varchar(50) | NO |  | NULL |  |  |
| has_advance_loan | char(1) | NO | MUL | N |  |  |
| advance_loan_amount | decimal(12,2) | YES |  | NULL |  |  |
| loan_returned_at | date | YES |  | NULL |  |  |
| receipt_submitted_at | date | YES |  | NULL |  |  |
| note | text | YES |  | NULL |  |  |
| changed_by | int | YES |  | NULL |  |  |
| created_at | datetime | NO |  | CURRENT_TIMESTAMP | DEFAULT_GENERATED |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| idx_ot_finance_loan | has_advance_loan | no | 1 |
| idx_ot_finance_loan | loan_returned_at | no | 2 |
| idx_ot_finance_loan | receipt_submitted_at | no | 3 |
| idx_ot_finance_travel | travel_id | no | 1 |
| idx_ot_finance_travel | created_at | no | 2 |
| PRIMARY | id | yes | 1 |

## Foreign keys

| Column | References | Constraint |
|---|---|---|
| travel_id | `work_official_travel.id` | fk_ot_finance_travel |

## Sample rows (0)

```json
[]
```
