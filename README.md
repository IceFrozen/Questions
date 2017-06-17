# Channel Server
---
## 名词统一
| 中文 | 英文 | 解释 |
| :- | :- | :- |
| 游戏发行公司 | CP | |
| 游戏 | Game | |
| 产品 | Product | 指游戏（Game）内销售的商品 |
| 玩家订单 | PlayerOrder | 指玩家直接充值到平台的订单 |
| 玩家 | Player | 指玩家的渠道平台身份 |
| Agent | Agent | 指玩家在单一游戏内身份 |
| 管理员 | Admin | |
| 系统管理员 | System Admin | IT系统本身的管理 |
| 商务管理员 | Business Admin | 运营&商务部分管理 |
| 推广管理员 | Seller Admin | 推广员系统**管理员**，**区别于推广员本身** |
| 推广员 | Seller | |
| 推广员订单 | SellerOrder | 指推广员充值进系统的订单 |


## 模型统一
## ACL Note
rabc = Role Based Access Control
### 角色 Role
- EveryOne
- LoggedIn
- Admin
- System Admin
- Business Admin
- Seller Admin
- Seller
- Player
### 权限 Permission
- User
  - Deny EveryOne *

    Note:
    - 额外禁止Create来禁止通过User接口注册
    - 额外禁止resetPasswrd，因为没有使用邮箱注册、登录
  - Allow EveryOne Login (用于用户名密码登录和后台管理员登录)
