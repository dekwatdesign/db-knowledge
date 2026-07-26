# `thaiaddress`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| addressid | varchar(6) | NO | PRI |  |  |  |
| name | varchar(50) | YES | MUL | NULL |  |  |
| engname | varchar(100) | YES |  | NULL |  |  |
| chwpart | char(2) | YES | MUL | NULL |  |  |
| amppart | char(2) | YES | MUL | NULL |  |  |
| tmbpart | char(2) | YES | MUL | NULL |  |  |
| codetype | char(1) | YES | MUL | NULL |  |  |
| pocode | varchar(5) | YES |  | NULL |  |  |
| full_name | varchar(250) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| amppart | amppart | no | 1 |
| chwpart | chwpart | no | 1 |
| codetype | codetype | no | 1 |
| ix_chwpart_amp_codetype | chwpart | no | 1 |
| ix_chwpart_amp_codetype | amppart | no | 2 |
| ix_chwpart_amp_codetype | codetype | no | 3 |
| ix_chwpart_amp_codetype_index | amppart | no | 1 |
| ix_chwpart_amp_codetype_index | chwpart | no | 2 |
| ix_chwpart_amp_codetype_index | codetype | no | 3 |
| ix_chwpart_amp_tmb_codetype | chwpart | no | 1 |
| ix_chwpart_amp_tmb_codetype | amppart | no | 2 |
| ix_chwpart_amp_tmb_codetype | tmbpart | no | 3 |
| ix_chwpart_amp_tmb_codetype | codetype | no | 4 |
| ix_chwpart_amp_tmb_codetype_index | amppart | no | 1 |
| ix_chwpart_amp_tmb_codetype_index | chwpart | no | 2 |
| ix_chwpart_amp_tmb_codetype_index | codetype | no | 3 |
| ix_chwpart_amp_tmb_codetype_index | tmbpart | no | 4 |
| ix_chwpart_codetype | chwpart | no | 1 |
| ix_chwpart_codetype | codetype | no | 2 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| name | name | no | 1 |
| PRIMARY | addressid | yes | 1 |
| tmbpart | tmbpart | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "addressid": "000000",
    "name": "ต่างประเทศ",
    "engname": null,
    "chwpart": "00",
    "amppart": "00",
    "tmbpart": "00",
    "codetype": "1",
    "pocode": null,
    "full_name": "ต่างประเทศ",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "addressid": "100000",
    "name": "กรุงเทพมหานคร",
    "engname": null,
    "chwpart": "10",
    "amppart": "00",
    "tmbpart": "00",
    "codetype": "1",
    "pocode": null,
    "full_name": "",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "addressid": "100100",
    "name": "เขตพระนคร",
    "engname": null,
    "chwpart": "10",
    "amppart": "01",
    "tmbpart": "00",
    "codetype": "2",
    "pocode": null,
    "full_name": "",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "addressid": "100101",
    "name": "พระบรมมหาราชวัง",
    "engname": null,
    "chwpart": "10",
    "amppart": "01",
    "tmbpart": "01",
    "codetype": "3",
    "pocode": null,
    "full_name": "แขวงพระบรมมหาราชวัง เขตพระนคร จ.กรุงเทพมหานคร",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "addressid": "100102",
    "name": "วังบูรพาภิรมย์",
    "engname": null,
    "chwpart": "10",
    "amppart": "01",
    "tmbpart": "02",
    "codetype": "3",
    "pocode": null,
    "full_name": "แขวงวังบูรพาภิรมย์ เขตพระนคร จ.กรุงเทพมหานคร",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "addressid": "100103",
    "name": "วัดราชบพิธ",
    "engname": null,
    "chwpart": "10",
    "amppart": "01",
    "tmbpart": "03",
    "codetype": "3",
    "pocode": null,
    "full_name": "แขวงวัดราชบพิธ เขตพระนคร จ.กรุงเทพมหานคร",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "addressid": "100104",
    "name": "สำราญราษฎร์",
    "engname": null,
    "chwpart": "10",
    "amppart": "01",
    "tmbpart": "04",
    "codetype": "3",
    "pocode": null,
    "full_name": "แขวงสำราญราษฎร์ เขตพระนคร จ.กรุงเทพมหานคร",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "addressid": "100105",
    "name": "ศาลเจ้าพ่อเสือ",
    "engname": null,
    "chwpart": "10",
    "amppart": "01",
    "tmbpart": "05",
    "codetype": "3",
    "pocode": null,
    "full_name": "แขวงศาลเจ้าพ่อเสือ เขตพระนคร จ.กรุงเทพมหานคร",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
