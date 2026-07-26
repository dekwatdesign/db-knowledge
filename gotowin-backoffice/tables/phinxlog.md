# `phinxlog`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| version | bigint | NO | PRI | NULL |  |  |
| migration_name | varchar(100) | NO |  | NULL |  |  |
| start_time | timestamp | YES |  | NULL |  |  |
| end_time | timestamp | YES |  | NULL |  |  |
| breakpoint | tinyint(1) | NO |  | 0 |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | version | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "version": 20250121000020,
    "migration_name": "LeaveEntitlement",
    "start_time": "2026-06-23 09:37:43",
    "end_time": "2026-06-23 09:37:43",
    "breakpoint": 0
  },
  {
    "version": 20250121000022,
    "migration_name": "GleaveOverOldsDefault",
    "start_time": "2026-06-23 09:37:43",
    "end_time": "2026-06-23 09:37:43",
    "breakpoint": 0
  },
  {
    "version": 20250121000024,
    "migration_name": "LeaveRulesSeedAll",
    "start_time": "2026-06-23 09:37:43",
    "end_time": "2026-06-23 09:37:43",
    "breakpoint": 0
  }
]
```
